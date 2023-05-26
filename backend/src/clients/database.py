from src.models.user_model import UserDBModel, CitiesDBModel, ExperiencesDBModel, UserExperiencesDBModel, UserCitiesDBModel
from src.models.user_model import engine
from src.models.api import UserCreate,UserLogin, UserProfile
from sqlalchemy.orm import Session
from sqlalchemy import select
from fastapi import HTTPException
from src.routes.auth import pwd_context

def create_register(user_create_api_model: UserCreate):
    with Session(engine) as db:
        query = select(UserDBModel).where(UserDBModel.email == user_create_api_model.email)
        result = db.execute(query).scalar_one_or_none()
    if result:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    hashed_password = pwd_context.hash(user_create_api_model.password)

    new_register = UserDBModel(name=user_create_api_model.name, email=user_create_api_model.email, hashed_password=hashed_password)
    db.add(new_register)
    db.commit()

    return result

def get_user_by_email(email: str) -> UserDBModel:
    with Session(engine) as db:
        query = select(UserDBModel).where(UserDBModel.email == email)
        user = db.execute(query).scalar_one_or_none()
    
    return user

def authenticate_user(user_login: UserLogin):
    with Session(engine) as db:
        query = select(UserDBModel).where(UserDBModel.email == user_login.email)
        user = db.execute(query).scalar_one_or_none()

    if not user or not pwd_context.verify(user_login.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid email or password")

    return user

def submit_questionnaire(user_profile_api_model: UserProfile):
    with Session(engine) as session:
        user = get_user_by_email(user_profile_api_model.email)
        if not user:
            raise HTTPException(status_code=404, detail="User not found")

        questionnaire = UserDBModel(age=user_profile_api_model.age, gender=user_profile_api_model.gender, live_in=user_profile_api_model.live_in)
        session.add(questionnaire)
        session.commit()

        for city_name in user_profile_api_model.city_advice:
            city = session.query(CitiesDBModel).filter(CitiesDBModel.name == city_name).first()
            if city:
                city_advice = UserCitiesDBModel(user_email=user.email, city_advice=city.id)
                session.add(city_advice)

        for experience_name in user_profile_api_model.experiences:
            experience = session.query(ExperiencesDBModel).filter(ExperiencesDBModel.name == experience_name).first()
            if experience:
                user_experience = UserExperiencesDBModel(user_email=user.email, experiences_id=experience.id)
                session.add(user_experience)

        session.commit()





