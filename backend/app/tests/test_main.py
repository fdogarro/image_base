from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_register_user():
    response = client.post(
        "/api/users/register",
        json={"email": "test@example.com", "password": "string"},
    )
    assert response.status_code == 200
    data = response.json()
    assert data["email"] == "test@example.com"
    assert "id" in data
    assert "is_active" in data

def test_login_for_access_token():
    response = client.post(
        "/api/login/access-token",
        data={"username": "test@example.com", "password": "string"},
    )
    assert response.status_code == 200
    data = response.json()
    assert "access_token" in data
    assert data["token_type"] == "bearer"