from sqlmodel import create_engine, Session
import os
from contextlib import contextmanager
from sqlalchemy.pool import StaticPool

DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_engine(
    DATABASE_URL,
    echo=True,
    poolclass=StaticPool,
)

@contextmanager
def get_session():
    with Session(engine) as session:
        yield session