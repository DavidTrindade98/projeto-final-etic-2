from src.models.user_model import User, Cities, Experiences, UserQuestionnaireData, UserCities, UserExperiences
from src.models.user_model import engine
from src.models.api import UserCreate, UserLogin, UserQuestionnaire
from sqlalchemy.orm import Session
from sqlalchemy import select
from fastapi import HTTPException
from src.routes.auth import pwd_context
from src.routes.auth import verify_password

def create_register(user_create_api_model: UserCreate):
    with Session(engine) as db:
        query = select(User).where(User.email == user_create_api_model.email)
        result = db.execute(query).scalar_one_or_none()
    if result:
        raise HTTPException(status_code=400, detail="Email already registered")
    
    hashed_password = pwd_context.hash(user_create_api_model.password)

    new_register = User(name=user_create_api_model.name, email=user_create_api_model.email, hashed_password=hashed_password)
    db.add(new_register)
    db.commit()

    return result

def get_user_by_email(email: str) -> User:
    with Session(engine) as db:
        query = select(User).where(User.email == email)
        user = db.execute(query).scalar_one_or_none()
    
    return user

def submit_questionnaire(questionnaire_data: UserQuestionnaire, user: User, session: Session):
    questionnaire = UserQuestionnaireData(
        age=questionnaire_data.age,
        gender=questionnaire_data.gender,
        live_in=questionnaire_data.live_in,
        user_email=user.email
    )

    for city_name in questionnaire_data.city_advice:
        city = session.query(Cities).filter(Cities.name == city_name).first()
        if city:
            city_advice = UserCities(city=city, user_email=user.email)
            session.add(city_advice)

    for experience_name in questionnaire_data.experiences:
        experience = session.query(Experiences).filter(Experiences.name == experience_name).first()
        if experience:
            user_experience = UserExperiences(experience=experience, user_email=user.email)
            session.add(user_experience)

    session.add(questionnaire)
    session.commit()





