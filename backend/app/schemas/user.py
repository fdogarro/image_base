from sqlmodel import SQLModel

# Shared properties
class UserBase(SQLModel):
    email: str

# Properties to receive via API on creation
class UserCreate(UserBase):
    password: str

# Properties to return via API
class User(UserBase):
    id: int
    is_active: bool

    class Config:
        orm_mode = True