from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from passlib.context import CryptContext
from databases import Database
from sqlalchemy import create_engine, Column, String
from sqlalchemy.orm import sessionmaker, declarative_base

# Define the database connection URL
DATABASE_URL = "mysql://root:admin@db/dankee_app_db"

# Create the SQLAlchemy engine
engine = create_engine(DATABASE_URL)

# Create the database session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Create the database instance
database = Database(DATABASE_URL)

# Create the base database model
BaseDatabaseModel = declarative_base()

class UserCreate(BaseModel):
    email: str
    name: str
    password: str

class UserLogin(BaseModel):
    email: str
    password: str

# Define the User model
class User(BaseDatabaseModel):
    __tablename__ = "users"
    email = Column(String(255), primary_key=True, index=True)
    name = Column(String(255))
    hashed_password = Column(String(255))

# Initialize the application
app = FastAPI()

# Initialize the password hashing context
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Routes
@app.post("/register")
async def register(user: UserCreate):
    # Check if the user already exists
    query = User.select().where(User.email == user.email)
    result = await database.fetch_one(query)
    if result:
        raise HTTPException(status_code=400, detail="Email already registered")

    # Hash the password
    hashed_password = pwd_context.hash(user.password)

    # Create a new user
    query = User.insert().values(email=user.email, name=user.name, hashed_password=hashed_password)
    await database.execute(query)

    return {"message": "User registered successfully"}

@app.post("/login")
async def login(user: UserLogin):
    # Retrieve the user from the database
    query = User.select().where(User.email == user.email)
    result = await database.fetch_one(query)
    if not result:
        raise HTTPException(status_code=404, detail="User not found")

    # Verify the password
    if not pwd_context.verify(user.password, result["hashed_password"]):
        raise HTTPException(status_code=401, detail="Incorrect password")

    return {"message": "Login successful"}

# Models

# Startup and shutdown events
@app.on_event("startup")
async def startup():
    # Connect to the database
    await database.connect()
    # Create the database tables
    BaseDatabaseModel.metadata.create_all(bind=engine)

@app.on_event("shutdown")
async def shutdown():
    # Disconnect from the database
    await database.disconnect()