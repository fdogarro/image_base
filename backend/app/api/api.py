from fastapi import APIRouter

from app.api.endpoints import photos

api_router = APIRouter()
api_router.include_router(photos.router, prefix="/photos", tags=["photos"])