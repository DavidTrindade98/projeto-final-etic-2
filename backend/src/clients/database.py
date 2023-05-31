from src.models.user_model import UserDBModel, CitiesDBModel, ExperiencesDBModel, UserExperiencesDBModel, UserCitiesDBModel
from src.models.user_model import engine  # Importing necessary modules and engine from user_model
from src.models.api import UserCreate, UserLogin, UserProfile  # Importing necessary API models
from sqlalchemy.orm import Session  # Importing Session from SQLAlchemy ORM
from sqlalchemy import select  # Importing select from SQLAlchemy
from fastapi import HTTPException  # Importing HTTPException from FastAPI
from src.routes.auth import pwd_context  # Importing pwd_context from auth

def create_register(user_create_api_model: UserCreate):
    with Session(engine) as db:  # Creating a session using the engine
        query = select(UserDBModel).where(UserDBModel.email == user_create_api_model.email)  # Creating a select query to check if email is already registered
        result = db.execute(query).scalar_one_or_none()  # Executing the query and fetching the result
    if result:  # If a user with the same email already exists
        raise HTTPException(status_code=400, detail="Email already registered")  # Raise an exception with an error message

    hashed_password = pwd_context.hash(user_create_api_model.password)  # Hashing the password

    new_register = UserDBModel(name=user_create_api_model.name, email=user_create_api_model.email, hashed_password=hashed_password)  # Creating a new UserDBModel instance
    db.add(new_register)  # Adding the new user to the session
    db.commit()  # Committing the changes to the database

    return result  # Returning the result

def get_user_by_email(email: str) -> UserDBModel:
    with Session(engine) as db:  # Creating a session using the engine
        query = select(UserDBModel).where(UserDBModel.email == email)  # Creating a select query to get user by email
        user = db.execute(query).scalar_one_or_none()  # Executing the query and fetching the result

    return user  # Returning the user