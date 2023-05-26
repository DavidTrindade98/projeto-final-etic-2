from fastapi import APIRouter, Depends,status, Response
from src.models.user_model import UserProfileDBModel, CitiesDBModel, UserCitiesDBModel,UserExperiencesDBModel,ExperiencesDBModel
from src.models.api import UserCreate, UserLogin, UserProfile
from src.routes.auth import pwd_context, get_current_user,oauth2_scheme
from src.controllers.RequestLogic import create_register, login
from sqlalchemy.orm import Session
from src.models.user_model import engine

router = APIRouter(prefix="/request", tags=["Requests"])

@router.post("/register/")
async def register_endpoint(register_api_model: UserCreate,response:Response):
    try:
        create_register(register_api_model=register_api_model)
    except Exception as exc:
        response.status_code = status.HTTP_400_BAD_REQUEST
        return str(exc)
    
@router.post("/login/")
async def login_endpoint(user_login_api_model: UserLogin, response: Response):
    try:
        token = login(user_login_api_model)
        return {"access_token": token}
    except Exception as exc:
        response.status_code = status.HTTP_400_BAD_REQUEST
        return str(exc)

@router.post("/profile/")
def create_profile(user_profile: UserProfile, email: str = Depends(get_current_user), token: str = Depends(oauth2_scheme)):

    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json",
    }

    with Session(engine) as db:
        profile_data = {
            "user_email": email,  
            "age": user_profile.age,
            "gender": user_profile.gender,
            "live_in": user_profile.live_in
        }
        profile = UserProfileDBModel(**profile_data)
        db.add(profile)
        db.commit()

        for city_name in user_profile.city_advice:
            city = db.query(CitiesDBModel).filter(CitiesDBModel.name == city_name).first()
            if city:
                user_cities = UserCitiesDBModel(user_email=email, city_advice_id=city.id)
                db.add(user_cities)

        for experience_name in user_profile.experiences:
            experience = db.query(ExperiencesDBModel).filter(ExperiencesDBModel.name == experience_name).first()
            if experience:
                user_experiences = UserExperiencesDBModel(user_email=email, experiences_id=experience.id)
                db.add(user_experiences)

        db.commit()

        return {"message": "Profile created successfully"}
