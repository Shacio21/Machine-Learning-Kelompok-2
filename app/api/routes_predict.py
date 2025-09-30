from fastapi import APIRouter, Depends
from app.core.security import verify_api_key
from app.schemas.predict_schema import PredictRequest, PredictResponse

router = APIRouter()

@router.post("/predict", response_model=PredictResponse, dependencies=[Depends(verify_api_key)])
def predict(data: PredictRequest):
    """
    Dummy prediction (pakai BMI sebagai contoh).
    """
    bmi = data.weight / ((data.height / 100) ** 2)

    if bmi < 18.5:
        level = "Beginner"
        confidence = 0.7
    elif bmi < 25:
        level = "Intermediate"
        confidence = 0.85
    else:
        level = "Advanced"
        confidence = 0.9

    return PredictResponse(level=level, confidence=confidence)
