from fastapi import APIRouter, Depends
from app.schemas.calculate_bmi_schemas import CalculateBMIRequest, CalculateBMIResponse
from app.core.security import verify_api_key

router = APIRouter(
    prefix="/calculate",   # optional prefix
    tags=["BMI"]
)

@router.post("/bmi", response_model=CalculateBMIResponse, dependencies=[Depends(verify_api_key)])
def calculate_bmi(data: CalculateBMIRequest):
    """
    Hitung Body Mass Index (BMI) berdasarkan berat dan tinggi badan.
    Rumus umum: BMI = berat(kg) / (tinggi(m))^2
    """
    bmi = data.weight / ((data.height / 100) ** 2)
    category = ""
    if bmi < 18.5:
        category = "Underweight"
    elif bmi < 24.9:
        category = "Normal weight"
    elif bmi < 29.9:
        category = "Overweight"
    
    return CalculateBMIResponse(bmi=bmi, category=category)