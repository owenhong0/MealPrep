from typing import Type
from sqlalchemy.orm import Session

from backend.schemas.table_schemas import UserSchema
from backend.services.properties import User

def get_users(db: Session) -> list[Type[User]]:
    return db.query(User).all()

def create_user(db: Session, user: UserSchema) -> User:
    db_user = db.query(User).filter(User.email == user.email).first()
    if db_user:
        return None
    new_user = User(name=user.name, email=user.email, password=user.password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user