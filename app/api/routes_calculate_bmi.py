from fastapi import APIRouter, Depends
from app.schemas.calculate_maxhr_schema import CalculateBMIRequest, CalculateBMIResponse
from app.core.security import verify_api_key

router = APIRouter()
@router.post("/calculate_bmi", response_model=CalculateBMIResponse, dependencies=[Depends(verify_api_key)])
def calculate_bmi(data: CalculateBMIRequest):
    """
    Hitung Body Mass Index (BMI) berdasarkan berat dan tinggi badan.
    Rumus umum: BMI = berat(kg) / (tinggi(m))^2
    """
    bmi = data.weight / ((data.height / 100) ** 2)
    return CalculateBMIResponse(bmi=bmi)