from pydantic import BaseModel
from typing import List

class UserCreate(BaseModel):
    email: str
    name: str
    password: str

class UserLogin(BaseModel):
    email: str
    password: str

class UserQuestionnaire(BaseModel):
    age: str
    gender: str
    live_in: str
    city_advice: List[str]
    experiences: List[str]
