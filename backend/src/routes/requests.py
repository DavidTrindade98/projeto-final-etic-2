from fastapi import APIRouter,status, Response
from src.models.api import UserCreate, UserLogin
from src.routes.auth import pwd_context
from src.controllers import RequestLogic
from src.controllers.RequestLogic import create_register, login

router = APIRouter(prefix="/request", tags=["Requests"])

@router.post("/register/")
async def register_endpoint(register_api_model: UserCreate,response:Response):
    try:
        create_register(register_api_model=register_api_model)
    except Exception as exc:
        response.status_code = status.HTTP_400_BAD_REQUEST
        return str(exc)
    
@router.post("/login/")
async def login_endpoint(user_login_api_model: UserLogin, response: Response):
    try:
        access_token = login(user_login_api_model)
        return {"access_token": access_token}
    except Exception as exc:
        response.status_code = status.HTTP_400_BAD_REQUEST
        return str(exc)