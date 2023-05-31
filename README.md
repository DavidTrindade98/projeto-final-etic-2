# Dankee_App

This is an project demonstrating how i build a full-stack mobile application using FastAPI, SQLAlchemy, Docker, and React.

## Prerequisites

Make sure you have the following installed on your system:

- Python 3
- Docker
- Node.js

## Backend Setup

1. Clone this repository: 
git clone <https://github.com/DavidTrindade98/projeto-final-etic-2>
cd backend/

2. Create a virtual environment and activate it:
python -m venv venv
source venv/bin/activate # for Linux/Mac
venv\Scripts\activate # for Windows

3. Generate poetry.lock file to manage Python dependencies:

poetry init 

4. Install the dependencies:

poetry install sqlalchemy, fastapi, uvicorn, pydantic, 
passlib[bcrypt], mysqlclient, mysql , pyjwt

5. Set up the database:

Modify the database settings in backend/src/config.py if needed
python app/initialize_db.py

6. Run the backend server:
uvicorn app.main:app --reload

The FastAPI server should now be running at `http://localhost:8000`.

## Frontend Setup

1. Install the frontend dependencies:
cd /frontend
npm install

2. Start the frontend development server:
npm start

The React development server should now be running at `http://localhost:3000`.

## Docker Setup

1. Clone this repository: 
git clone <https://github.com/DavidTrindade98/projeto-final-etic-2>

2. Build the Docker image:
docker-compose build

2. Run the Docker container:
docker-compose up

## Usage

- Access the FastAPI Swagger at `http://localhost:8000/docs`.
- Access the React frontend at `http://localhost:3000`.
- Access the Database at `http://localhost:8080`.

## References

- [FastAPI documentation](https://fastapi.tiangolo.com/)
- [SQLAlchemy documentation](https://docs.sqlalchemy.org/)
- [Pydantic documentation](https://docs.pydantic.dev/)
- [Docker documentation](https://docs.docker.com/)
- [React documentation](https://reactjs.org/)

