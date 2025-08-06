from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def read_photos():
    return [{"id": 1, "url": "http://example.com/photo1.jpg"}]