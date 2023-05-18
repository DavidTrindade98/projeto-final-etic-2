from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from passlib.context import CryptContext
from sqlalchemy import create_engine, Column, String, select, insert
from sqlalchemy.orm import sessionmaker, declarative_base
from src.config import Settings
from src.models import api
from src.models import database


# Define the database connection URL
DATABASE_URL = "mysql://root:admin@db/dankee_app_db"

# Create the SQLAlchemy engine
engine = create_engine(Settings().database_connection)

# Create the database session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)




# Define the User model

# Initialize the application
app = FastAPI()

# Initialize the password hashing context
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


# Routes
@app.post("/register")
async def register(user: UserCreate):
    # Check if the user already exists
     #query = User.select().where(User.email == user.email)
    query = select(User).where(User.email == user.email)
    #result = await database.fetch_one(query)
    query = insert(User).values(name="name", email="email", hashed_password="123")
    #if result:
        #raise HTTPException(status_code=400, detail="Email already registered")

    # Hash the password
    hashed_password = pwd_context.hash(user.password)
    print(query)
    # Create a new user
    #query = User.insert().values(email=user.email, name=user.name, hashed_password=hashed_password)
    #await database.execute(query)

    return {"message": "User registered successfully"}

@app.post("/login")
async def login(user: UserLogin):
    # Retrieve the user from the database
    query = User.select().where(User.email == user.email)
    #result = await database.fetch_one(query)
    #if not result:
        #raise HTTPException(status_code=404, detail="User not found")

    # Verify the password
    #if not pwd_context.verify(user.password, result["hashed_password"]):
        #raise HTTPException(status_code=401, detail="Incorrect password")

    #return {"message": "Login successful"}


