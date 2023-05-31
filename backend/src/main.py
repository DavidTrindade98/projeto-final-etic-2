from fastapi import FastAPI  # Importing FastAPI
from src.routes import requests  # Importing requests module from src.routes
from fastapi.middleware.cors import CORSMiddleware  # Importing CORSMiddleware from FastAPI middleware

app = FastAPI()  # Creating a FastAPI instance

routers = [
    requests.router,  # List of routers to include in the app
]

for router in routers:
    app.include_router(router=router)  # Including each router in the app

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configuring the allowed origins for CORS. Adjust the list according to your requirements
    allow_methods=["*"],  # Configuring the allowed methods for CORS. Add "OPTIONS" to the list if needed
    allow_headers=["*"],  # Configuring the allowed headers for CORS. Adjust the list according to your requirements
)