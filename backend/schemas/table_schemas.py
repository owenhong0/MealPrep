from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class UserSchema(BaseModel):
    id: Optional[int]
    name: str
    email: EmailStr
    password: str
    created_at: Optional[datetime]
    updated_at: Optional[datetime]
    class Config:
        orm_mode = True
