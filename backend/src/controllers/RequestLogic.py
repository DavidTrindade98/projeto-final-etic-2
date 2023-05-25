from src.clients import database
from fastapi import HTTPException
from src.models.api import UserCreate, UserLogin, UserQuestionnaire
from src.routes.auth import verify_password, generate_access_token

def create_register(register_api_model: UserCreate):
    database.create_register(register_api_model)

def login(user_login_api_model: UserLogin):
    user = database.get_user_by_email(user_login_api_model.email)
    if not user or not verify_password(user_login_api_model.password, user.hashed_password):
        raise Exception("Invalid email or password")

    access_token = generate_access_token(user.email)
    return access_token

def get_user_by_email(email: str):
    user = database.get_user_by_email(email)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

def submit_user_questionnaire(questionnaire_data: UserQuestionnaire):
    database.submit_questionnaire(questionnaire_data)