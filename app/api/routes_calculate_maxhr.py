from fastapi import APIRouter, Depends
from app.schemas.calculate_maxhr_schemas import CalculateMAXHRRequest, CalculateMAXHRResponse
from app.core.security import verify_api_key

router = APIRouter(
    prefix="/calculate",   # optional prefix
    tags=["MAXHR"]
)

@router.post("/maxhr", response_model=CalculateMAXHRResponse, dependencies=[Depends(verify_api_key)])
def calculate_maxhr(data: CalculateMAXHRRequest):
    """
    Hitung Maximum Heart Rate (MAXHR) berdasarkan umur.
    Rumus umum: MAXHR = 220 - umur
    """
    max_hr = 220 - data.age
    return CalculateMAXHRResponse(max_hr=max_hr)