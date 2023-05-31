from pydantic import BaseModel, validator  # Importing required modules
from typing import List  # Importing List type from typing module

class UserCreate(BaseModel):  # Definition of UserCreate model
    email: str  # Attribute: email of type string
    name: str  # Attribute: name of type string
    password: str  # Attribute: password of type string

    @validator('email')  # Validator decorator for email attribute
    def email_not_empty(cls, value):
        if not value:  # Check if email is empty
            raise ValueError('email must not be empty')  # Raise an error if email is empty
        return value  # Return the email value

    @validator('name')  # Validator decorator for name attribute
    def name_not_empty(cls, value):
        if not value:  # Check if name is empty
            raise ValueError('name must not be empty')  # Raise an error if name is empty
        return value  # Return the name value
    
    @validator('password')  # Validator decorator for password attribute
    def password_not_empty(cls, value):
        if not value:  # Check if password is empty
            raise ValueError('password must not be empty')  # Raise an error if password is empty
        return value  # Return the password value

class UserLogin(BaseModel):  # Definition of UserLogin model
    email: str  # Attribute: email of type string
    password: str  # Attribute: password of type string

    @validator('email')  # Validator decorator for email attribute
    def email_not_empty(cls, value):
        if not value:  # Check if email is empty
            raise ValueError('email must not be empty')  # Raise an error if email is empty
        return value  # Return the email value
    
    @validator('password')  # Validator decorator for password attribute
    def password_not_empty(cls, value):
        if not value:  # Check if password is empty
            raise ValueError('password must not be empty')  # Raise an error if password is empty
        return value  # Return the password value

class UserProfile(BaseModel):  # Definition of UserProfile model
    age: str  # Attribute: age of type string
    gender: str  # Attribute: gender of type string
    live_in: str  # Attribute: live_in of type string
    city_advice: List[str]  # Attribute: city_advice of type List[str]
    experiences: List[str]  # Attribute: experiences of type List[str]