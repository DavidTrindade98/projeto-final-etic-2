from sqlalchemy.orm import declarative_base, relationship
from sqlalchemy import String, Column, Integer, ForeignKey
from sqlalchemy import create_engine
from src.config import Settings

engine = create_engine(Settings().database_connection)

BaseDatabaseModel = declarative_base()

class User(BaseDatabaseModel):
    __tablename__ = "users"
    email = Column(String(255), primary_key=True, index=True)
    name = Column(String(255))
    hashed_password = Column(String(255))

    age = Column(String(255))
    gender = Column(String(255))
    live_in = Column(String(255))

class UserCities(BaseDatabaseModel):
    __tablename__ = "user_cities"
    user_email = Column(String(255), ForeignKey("users.email"), primary_key=True)
    city = Column(String(255),primary_key=True)

class UserExperiences(BaseDatabaseModel):
    __tablename__ = "user_experiences"
    user_email = Column(String(255), ForeignKey("users.email"),primary_key=True)
    experiences = Column(String(255),primary_key=True)

class Cities(BaseDatabaseModel):
    __tablename__ = "cities"
    id = Column(Integer, primary_key=True)
    name = Column(String(255))

class Experiences(BaseDatabaseModel):
    __tablename__ = "experiences"
    id = Column(Integer, primary_key=True)
    name = Column(String(255))

BaseDatabaseModel.metadata.create_all(engine)