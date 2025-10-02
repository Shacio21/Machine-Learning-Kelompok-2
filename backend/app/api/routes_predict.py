from fastapi import APIRouter, Depends
from app.core.security import verify_api_key
from app.schemas.predict_schema import PredictRequest, PredictResponse
from app.utils.logger import logger
from app.schemas.predict_schema import PredictRequest,PredictResponse
import joblib
import os
import pandas as pd

BASE_DIR = os.path.dirname(os.path.abspath(__file__))  # folder app/api
MODEL_PATH = os.path.join(BASE_DIR, "models", "random_forest_fitness_model.pkl")

with open(MODEL_PATH, "rb") as f:
   model = joblib.load(f)

router = APIRouter()

@router.post("/predict", response_model=PredictResponse, dependencies=[Depends(verify_api_key)])
def predict(data: PredictRequest):
    df = pd.DataFrame([data.dict()])
    prediction1 = model.predict(df)[0]
    return PredictResponse(prediction=prediction1) 
