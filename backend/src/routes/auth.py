from passlib.context import CryptContext
import jwt
from src.config import settings

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

def generate_access_token(email: str) -> str:
    secret_key = settings.secret_key
    algorithm = settings.algorithm

    payload = {"email": email}

    access_token = jwt.encode(payload, secret_key, algorithm=algorithm)

    return access_token