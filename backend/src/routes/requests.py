from fastapi import APIRouter, Depends, status, Response, HTTPException, Security
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from src.models.user_model import UserProfileDBModel, CitiesDBModel, UserCitiesDBModel, UserExperiencesDBModel, ExperiencesDBModel, UserDBModel
from src.models.api import UserCreate, UserLogin, UserProfile
from src.routes.auth import create_access_token, pwd_context
from src.controllers.RequestLogic import create_register
from sqlalchemy.orm import Session
from src.models.user_model import engine
from sqlalchemy.orm import sessionmaker
import jwt

router = APIRouter(prefix="/request", tags=["Requests"])
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
security = HTTPBearer()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def authenticate_user(email: str, password: str, db: Session):
    user = db.query(UserDBModel).filter(UserDBModel.email == email).first()
    if not user or not pwd_context.verify(password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    return user

@router.post("/register/")
async def register_endpoint(register_api_model: UserCreate, response: Response):
    try:
        create_register(register_api_model=register_api_model)
    except Exception as exc:
        response.status_code = status.HTTP_400_BAD_REQUEST
        return str(exc)

@router.post("/login/")
def login(user_login_api_model: UserLogin, db: Session = Depends(get_db)):
    email = user_login_api_model.email
    password = user_login_api_model.password
    user = authenticate_user(email, password, db)
    access_token = create_access_token(user.email)
    return {"access_token": access_token}

@router.post("/profile/")
def submit_questionnaire(
    user_profile_api_model: UserProfile,
    db: Session = Depends(get_db),
    auth: HTTPAuthorizationCredentials = Security(security)
):
    # Access token is available in `auth.credentials`
    access_token = auth.credentials

    try:
        decoded_token = jwt.decode(access_token, "HS256", algorithms=["HS256"])
        email = decoded_token.get("sub")
        if not email:
            raise HTTPException(status_code=401, detail="Invalid access token")
    except jwt.exceptions.DecodeError:
        raise HTTPException(status_code=401, detail="Invalid access token")

    user = db.query(UserDBModel).filter(UserDBModel.email == email).first()
    if not user:
        raise HTTPException(status_code=401, detail="Invalid access token")

    # Retrieve city IDs based on city names
    # Retrieve city IDs based on city names
    city_ids = []
    for city_name in user_profile_api_model.city_advice:
        city = db.query(CitiesDBModel).filter(CitiesDBModel.name == city_name).first()
        if city:
            city_ids.append(city.id)

    # Retrieve experience IDs based on experience names
    experience_ids = []
    for experience_name in user_profile_api_model.experiences:
        experience = db.query(ExperiencesDBModel).filter(ExperiencesDBModel.name == experience_name).first()
        if experience:
            experience_ids.append(experience.id)

    db_profile = UserProfileDBModel(
        user_email=user.email,
        age=user_profile_api_model.age,
        gender=user_profile_api_model.gender,
        live_in=user_profile_api_model.live_in,
    )

    # Assign city advice IDs
    for city_id in city_ids:
        user_city = UserCitiesDBModel(user_email=user.email, city_advice_id=city_id)
        db.add(user_city)

    # Assign experience IDs
    for experience_id in experience_ids:
        user_experience = UserExperiencesDBModel(user_email=user.email, experiences_id=experience_id)
        db.add(user_experience)

    db.add(db_profile)
    db.commit()
    db.refresh(db_profile)

    return {"message": "Questionnaire submitted successfully"}