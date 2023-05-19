from fastapi import APIRouter,status, Response
from src.models.api import UserCreate, UserLogin
from src.routes.auth import pwd_context
from src.controllers import RequestLogic

router = APIRouter(prefix="/request", tags=["Requests"])

@router.post("/register/")
async def register_endpoint(register_api_model: UserCreate,response:Response):
    try:
        RequestLogic.create_register(register_api_model=register_api_model)
    except Exception as exc:
        response.status_code = status.HTTP_400_BAD_REQUEST
        return str(exc)
    # Check if the user already exists
     #query = User.select().where(User.email == user.email)
    #query = select(User).where(User.email == user.email)
    #result = await db.fetch_one(query)
    #query = insert(User).values(name="name", email="email", hashed_password="123")
    #if result:
        #raise HTTPException(status_code=400, detail="Email already registered")

    # Hash the password
    #hashed_password = pwd_context.hash(user.password)
    # Create a new user
    #with Session(engine) as db:
        #new_register = User(**user.dict())
        #db.add(new_register)
        #db.commit()
    #query = User.insert().values(email=user.email, name=user.name, hashed_password=hashed_password)
    #await db.execute(query)

    #return {"message": "User registered successfully"}