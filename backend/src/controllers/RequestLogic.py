from src.clients import database
from fastapi import HTTPException
from src.models.api import UserCreate, UserLogin, UserProfile

def create_register(register_api_model: UserCreate):
    database.create_register(register_api_model)


