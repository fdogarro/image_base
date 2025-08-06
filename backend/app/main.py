from fastapi import FastAPI
from app.api.api import api_router

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to the AI Photoshoot API"}

app.include_router(api_router, prefix="/api")