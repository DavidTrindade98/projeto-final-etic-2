from pydantic import BaseSettings

class Settings(BaseSettings):

    database_connection: str = "mysql://root:admin@db/dankee_app_db"
