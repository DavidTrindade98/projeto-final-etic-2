from fastapi import FastAPI
from src.models import user_model
from src.routes import requests
from src.controllers import RequestLogic

app = FastAPI()

routers = [
    requests.router,
]

for router in routers:
    app.include_router(router=router)


# Create the SQLAlchemy engine

# Create the database session
#SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Define the User model

# Initialize the application
#app = FastAPI()

# Initialize the password hashing context
#pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Routes
#@app.post("/register")
#async def register(user: UserCreate):
    
    # Check if the user already exists
     #query = User.select().where(User.email == user.email)
    #query = select(User).where(User.email == user.email)
    #result = await db.fetch_one(query)
    #query = insert(User).values(name="name", email="email", hashed_password="123")
    #if result:
        #raise HTTPException(status_code=400, detail="Email already registered")

    # Hash the password
    
    # Create a new user
    #with Session(engine) as db:
        #new_register = User(**user.dict())
        #db.add(new_register)
        #db.commit()
    #query = User.insert().values(email=user.email, name=user.name, hashed_password=hashed_password)
    #await db.execute(query)

    #return {"message": "User registered successfully"}

#@app.post("/login")
#async def login(user: UserLogin):
    # Retrieve the user from the database
    #query = User.select().where(User.email == user.email)
    #result = await database.fetch_one(query)
    #if not result:
        #raise HTTPException(status_code=404, detail="User not found")

    # Verify the password
    #if not pwd_context.verify(user.password, result["hashed_password"]):
        #raise HTTPException(status_code=401, detail="Incorrect password")

    #return {"message": "Login successful"}



