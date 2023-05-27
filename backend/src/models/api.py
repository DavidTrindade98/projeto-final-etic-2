from pydantic import BaseModel, validator
from typing import List

class UserCreate(BaseModel):
    email: str
    name: str
    password: str

    @validator('email')
    def email_not_empty(cls, value):
        if not value:
            raise ValueError('email must not be empty')
        return value

    @validator('name')
    def name_not_empty(cls, value):
        if not value:
            raise ValueError('name must not be empty')
        return value
    
    @validator('password')
    def password_not_empty(cls, value):
        if not value:
            raise ValueError('password must not be empty')
        return value

class UserLogin(BaseModel):
    email: str
    password: str

    @validator('email')
    def email_not_empty(cls, value):
        if not value:
            raise ValueError('email must not be empty')
        return value
    
    @validator('password')
    def password_not_empty(cls, value):
        if not value:
            raise ValueError('password must not be empty')
        return value

class UserProfile(BaseModel):
    age: str
    gender: str
    live_in: str
    city_advice: List[str]
    experiences: List[str]