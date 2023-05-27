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








