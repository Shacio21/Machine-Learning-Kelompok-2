from fastapi import APIRouter

router = APIRouter()

@router.get("/health")
def health_check():
    """
    Endpoint sederhana untuk mengecek status API.
    """
    return {"status": "ok"}
