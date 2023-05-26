from sqlalchemy import String, Column, Integer, ForeignKey
from sqlalchemy.orm import declarative_base, relationship
from sqlalchemy import create_engine
from src.config import Settings

engine = create_engine(Settings().database_connection)

BaseDatabaseModel = declarative_base()

class UserDBModel(BaseDatabaseModel):
    __tablename__ = "users"
    email = Column(String(255), primary_key=True)
    name = Column(String(255))
    hashed_password = Column(String(255))
    profile = relationship("UserProfileDBModel", back_populates="user")

class CitiesDBModel(BaseDatabaseModel):
    __tablename__ = "cities"
    id = Column(Integer, primary_key=True)
    name = Column(String(255))

class ExperiencesDBModel(BaseDatabaseModel):
    __tablename__ = "experiences"
    id = Column(Integer, primary_key=True)
    name = Column(String(255))

class UserCitiesDBModel(BaseDatabaseModel):
    __tablename__ = "user_cities"
    user_email = Column(String(255), ForeignKey("users.email"), primary_key=True)
    city_advice_id = Column(Integer, ForeignKey("cities.id"), primary_key=True)

class UserExperiencesDBModel(BaseDatabaseModel):
    __tablename__ = "user_experiences"
    user_email = Column(String(255), ForeignKey("users.email"), primary_key=True)
    experiences_id = Column(Integer, ForeignKey("experiences.id"), primary_key=True)

class UserProfileDBModel(BaseDatabaseModel):
    __tablename__ = "user_profile"
    id = Column(Integer, primary_key=True)
    user_email = Column(String(255), ForeignKey("users.email"))
    age = Column(String(255))
    gender = Column(String(255))
    live_in = Column(String(255))
    city_advice_id = Column(Integer, ForeignKey("cities.id"))
    experiences_id = Column(Integer, ForeignKey("experiences.id"))
    user = relationship("UserDBModel", back_populates="profile")

BaseDatabaseModel.metadata.create_all(engine, checkfirst=True)