from pydantic import BaseSettings

class Settings(BaseSettings):

    database_connection: str = "mysql://root:1234_4321@localhost:3306/dankee_app_db"
    #database_connection2: str = "mysql://root:admin@db/dankee_app_db"
