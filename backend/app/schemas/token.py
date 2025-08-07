from sqlmodel import SQLModel
from typing import Union

class Token(SQLModel):
    access_token: str
    token_type: str

class TokenPayload(SQLModel):
    sub: Union[int, None] = None