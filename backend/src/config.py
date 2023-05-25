from pydantic import BaseSettings

class Settings(BaseSettings):
    secret_key: str = "your_secret_key_here"
    algorithm: str = "HS256"
    #Local Env Dev# # 
    #database_connection: str = "mysql://root:1234_4321@localhost:3306/dankee_app_db"
    #Docker Container Dev# 
    database_connection: str = "mysql://root:admin@db/dankee_app_db"

settings = Settings()