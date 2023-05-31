from datetime import datetime, timedelta
from passlib.context import CryptContext
import jwt
from fastapi.security import OAuth2PasswordBearer
from datetime import datetime, timedelta

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")  # OAuth2 scheme for password bearer authentication

SECRET_KEY = "HS256"  # Secret key used for token encoding and decoding
ALGORITHM = "HS256"  # Algorithm used for token encoding and decoding
ACCESS_TOKEN_EXPIRE_MINUTES = 30  # Expiration time for access tokens in minutes

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")  # Password hashing context

def create_access_token(email: str) -> str:
    payload = {
        "sub": email,  # Subject of the token (in this case, the user's email)
        "exp": datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES),  # Expiration time of the token
    }
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)  # Encoding the payload into a token