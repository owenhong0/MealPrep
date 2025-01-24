import datetime

from sqlalchemy import Column, Integer, String, create_engine, DateTime
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String(150), nullable=False, unique=True)
    password = Column(String(128), nullable=False)  # Store the hashed password
    email = Column(String(254), nullable=False, unique=True)
    first_name = Column(String(30), nullable=True)
    last_name = Column(String(30), nullable=True)
    date_joined = Column(DateTime, default=datetime.datetime.now())

    def __repr__(self):
        return f"<User(username={self.username}, email={self.email})>"
