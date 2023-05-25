# Dankee_App

This is an project demonstrating how i build a full-stack mobile application using FastAPI, SQLAlchemy, Docker, and React.

## Prerequisites

Make sure you have the following installed on your system:

- Python 3.x
- Docker
- Node.js

## Backend Setup

1. Clone this repository: 
git clone <repository_url>
cd backend/

2. Create a virtual environment and activate it:
python -m venv venv
source venv/bin/activate # for Linux/Mac
venv\Scripts\activate # for Windows

3. Install the dependencies:

pip install sqlalchemy, fastapi, uvicorn, pydantic, 
passlib[bcrypt], mysqlclient, mysql , pyjwt

4. Set up the database:

Modify the database settings in backend/src/config.py if needed
python app/initialize_db.py

5. Run the backend server:
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

1. Build the Docker image:
docker-compose build

2. Run the Docker container:
docker-compose up

The FastAPI server within the Docker container should now be running at `http://localhost:8000`.

## Usage

- Access the FastAPI backend at `http://localhost:8000`.
- Access the React frontend at `http://localhost:3000`.
- Access the Database(if ur running Docker) at `http://localhost:8080`.

Feel free to explore and customize the project structure and code to suit your needs.

## References

- [FastAPI documentation](https://fastapi.tiangolo.com/)
- [SQLAlchemy documentation](https://docs.sqlalchemy.org/)
- [Docker documentation](https://docs.docker.com/)
- [React documentation](https://reactjs.org/)
