from sqlalchemy import String, Column, Integer, ForeignKey  # Importing required modules from SQLAlchemy
from sqlalchemy.orm import declarative_base, relationship
from sqlalchemy import create_engine
from src.config import Settings  # Importing Settings class from src.config module

engine = create_engine(Settings().database_connection)  # Creating the database engine using the database connection from Settings

BaseDatabaseModel = declarative_base()  # Creating a base class for database models

class UserDBModel(BaseDatabaseModel):  # Definition of UserDBModel
    __tablename__ = "users"  # Table name for the model
    email = Column(String(255), primary_key=True)  # Column: email as primary key
    name = Column(String(255))  # Column: name of type string
    hashed_password = Column(String(255))  # Column: hashed_password of type string
    profile = relationship("UserProfileDBModel", back_populates="user")  # Relationship: one-to-one with UserProfileDBModel

class CitiesDBModel(BaseDatabaseModel):  # Definition of CitiesDBModel
    __tablename__ = "cities"  # Table name for the model
    id = Column(Integer, primary_key=True)  # Column: id as primary key
    name = Column(String(255))  # Column: name of type string

class ExperiencesDBModel(BaseDatabaseModel):  # Definition of ExperiencesDBModel
    __tablename__ = "experiences"  # Table name for the model
    id = Column(Integer, primary_key=True)  # Column: id as primary key
    name = Column(String(255))  # Column: name of type string

class UserCitiesDBModel(BaseDatabaseModel):  # Definition of UserCitiesDBModel
    __tablename__ = "user_cities"  # Table name for the model
    user_email = Column(String(255), ForeignKey("users.email"), primary_key=True)  # Column: user_email as primary key and foreign key referencing users.email
    city_advice_id = Column(Integer, ForeignKey("cities.id"), primary_key=True)  # Column: city_advice_id as primary key and foreign key referencing cities.id

class UserExperiencesDBModel(BaseDatabaseModel):  # Definition of UserExperiencesDBModel
    __tablename__ = "user_experiences"  # Table name for the model
    user_email = Column(String(255), ForeignKey("users.email"), primary_key=True)  # Column: user_email as primary key and foreign key referencing users.email
    experiences_id = Column(Integer, ForeignKey("experiences.id"), primary_key=True)  # Column: experiences_id as primary key and foreign key referencing experiences.id

class UserProfileDBModel(BaseDatabaseModel):  # Definition of UserProfileDBModel
    __tablename__ = "user_profile"  # Table name for the model
    id = Column(Integer, primary_key=True)  # Column: id as primary key
    user_email = Column(String(255), ForeignKey("users.email"))  # Column: user_email as foreign key referencing users.email
    age = Column(String(255))  # Column: age of type string
    gender = Column(String(255))  # Column: gender of type string
    live_in = Column(String(255))  # Column: live_in of type string
    city_advice_id = Column(Integer, ForeignKey("cities.id"))  # Column: city_advice_id as foreign key referencing cities.id
    experiences_id = Column(Integer, ForeignKey("experiences.id"))  # Column: experiences_id as foreign key referencing experiences.id
    user = relationship("UserDBModel", back_populates="profile")  # Relationship: one-to-one with UserDBModel

    city_advice = relationship("CitiesDBModel", foreign_keys=[city_advice_id])  # Relationship: one-to-one with CitiesDBModel
    experiences = relationship("ExperiencesDBModel", foreign_keys=[experiences_id])  # Relationship: one-to-one with ExperiencesDBModel

BaseDatabaseModel.metadata.create_all(engine, checkfirst=True)  # Create all the defined models in the database