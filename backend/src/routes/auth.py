from passlib.context import CryptContext
import jwt
from src.config import settings
from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer, HTTPBearer
from jwt import decode, exceptions

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/requests/login/")
security = HTTPBearer()

SECRET_KEY = "your-secret-key"
ALGORITHM = "HS256"

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

def generate_access_token(email: str) -> str:
    secret_key = settings.secret_key
    algorithm = settings.algorithm

    payload = {"email": email}

    token = jwt.encode(payload, secret_key, algorithm=algorithm)

    return token


def decode_jwt(token):
    try:
        decoded_token = decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return decoded_token
    except exceptions.DecodeError:
        return None

async def get_current_user(token: str = Depends(oauth2_scheme)):
    token = token.replace("Bearer ", "")
    decoded_token = decode_jwt(token)
    if decoded_token:
        email = decoded_token.get("sub")
        if email:
            return email

    raise HTTPException(status_code=401, detail="Invalid or expired token")