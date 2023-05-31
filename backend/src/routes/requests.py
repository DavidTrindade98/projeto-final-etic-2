from fastapi import APIRouter, Depends, status, Response, HTTPException, Security
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from src.models.user_model import UserProfileDBModel, CitiesDBModel,ExperiencesDBModel, UserDBModel
from src.models.api import UserCreate, UserLogin, UserProfile
from src.routes.auth import create_access_token, pwd_context
from src.controllers.RequestLogic import create_register
from sqlalchemy.orm import Session
from src.models.user_model import engine
from sqlalchemy.orm import sessionmaker
import jwt

router = APIRouter(prefix="/request", tags=["Requests"])  # Creating an APIRouter instance with a prefix and tags
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)  # Creating a sessionmaker for the database engine
security = HTTPBearer()  # Creating an instance of HTTPBearer for authentication

def get_db():
    db = SessionLocal()  # Creating a session using the sessionmaker
    try:
        yield db  # Yielding the session to be used as a dependency
    finally:
        db.close()  # Closing the session after the request is completed

def authenticate_user(email: str, password: str, db: Session):
    user = db.query(UserDBModel).filter(UserDBModel.email == email).first()  # Querying the database to get the user by email
    if not user or not pwd_context.verify(password, user.hashed_password):  # Verifying the password
        raise HTTPException(status_code=401, detail="Invalid email or password")  # Raising an exception if the authentication fails
    return user  # Returning the authenticated user

@router.post("/register/")  # Endpoint for user registration
async def register_endpoint(register_api_model: UserCreate, response: Response):
    try:
        create_register(register_api_model=register_api_model)  # Calling the create_register function to register a new user
    except Exception as exc:
        response.status_code = status.HTTP_400_BAD_REQUEST  # Setting the response status code to 400 if there's an exception
        return str(exc)  # Returning the exception message

@router.post("/login/")  # Endpoint for user login
def login(user_login_api_model: UserLogin, db: Session = Depends(get_db)):
    email = user_login_api_model.email
    password = user_login_api_model.password
    user = authenticate_user(email, password, db)  # Authenticating the user
    access_token = create_access_token(user.email)  # Creating an access token
    return {"access_token": access_token}  # Returning the access token

@router.post("/profile/")  # Endpoint for user profile
def profile(
    user_profile_api_model: UserProfile,
    db: Session = Depends(get_db),
    auth: HTTPAuthorizationCredentials = Security(security)  # Authenticating the user with the HTTPBearer token
):
    access_token = auth.credentials  # Access token extracted from the HTTPBearer token

    try:
        decoded_token = jwt.decode(access_token, "HS256", algorithms=["HS256"])  # Decoding the access token
        email = decoded_token.get("sub")  # Extracting the email from the decoded token
        if not email:
            raise HTTPException(status_code=401, detail="Invalid access token")  # Raising an exception if the email is missing
    except jwt.exceptions.DecodeError:
        raise HTTPException(status_code=401, detail="Invalid access token")  # Raising an exception if there's an error decoding the token

    user = db.query(UserDBModel).filter(UserDBModel.email == email).first()  # Querying the user from the database
    if not user:
        raise HTTPException(status_code=401, detail="Invalid access token")  # Raising an exception if the user doesn't exist

    # Retrieve city IDs based on city names
    city_ids = []
    for city_name in user_profile_api_model.city_advice:
        city = db.query(CitiesDBModel).filter(CitiesDBModel.name == city_name).first()  # Querying the city from the database
        if city:
            city_ids.append(city.id)  # Adding the city ID to the list if it exists
        else:
            new_city = CitiesDBModel(name=city_name)  # Creating a new city record if it doesn't exist
            db.add(new_city)
            db.commit()
            city_ids.append(new_city.id)  # Adding the new city ID to the list

    # Create or retrieve experience records and get their IDs
    experience_ids = []
    for experience_name in user_profile_api_model.experiences:
        experience = db.query(ExperiencesDBModel).filter(ExperiencesDBModel.name == experience_name).first()  # Querying the experience from the database
        if experience:
            experience_ids.append(experience.id)  # Adding the experience ID to the list if it exists
        else:
            new_experience = ExperiencesDBModel(name=experience_name)  # Creating a new experience record if it doesn't exist
            db.add(new_experience)
            db.commit()
            experience_ids.append(new_experience.id)  # Adding the new experience ID to the list

    db_profile = UserProfileDBModel(
        user_email=user.email,
        age=user_profile_api_model.age,
        gender=user_profile_api_model.gender,
        live_in=user_profile_api_model.live_in,
        city_advice_id=city_ids,
        experiences_id=experience_ids,
    )

    db.add(db_profile)  # Adding the profile to the database
    db.commit()
    db.refresh(db_profile)

    return {"message": "Questionnaire submitted successfully"}  # Returning a success message