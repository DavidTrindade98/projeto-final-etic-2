from fastapi import FastAPI
from src.routes import requests
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

routers = [
    requests.router,
]

for router in routers:
    app.include_router(router=router)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust the allowed origins according to your requirements
    allow_methods=["*"],  # Add "OPTIONS" to the allowed methods
    allow_headers=["*"],  # Adjust the allowed headers according to your requirements
)