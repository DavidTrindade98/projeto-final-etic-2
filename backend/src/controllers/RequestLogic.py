from src.clients import database
from src.models.api import UserCreate, UserLogin

def create_register(register_api_model: UserCreate):
    database.create_register(register_api_model)