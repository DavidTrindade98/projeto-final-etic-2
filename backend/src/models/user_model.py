from sqlalchemy.orm import declarative_base, relationship
from sqlalchemy import String, Column
from sqlalchemy import create_engine
from src.config import Settings

engine = create_engine(Settings().database_connection)

BaseDatabaseModel = declarative_base()

class User(BaseDatabaseModel):
    __tablename__ = "users"
    email = Column(String(255), primary_key=True, index=True)
    name = Column(String(255))
    hashed_password = Column(String(255))

BaseDatabaseModel.metadata.create_all(engine)