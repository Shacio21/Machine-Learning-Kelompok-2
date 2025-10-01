from fastapi import APIRouter, Depends, HTTPException
from app.core.security import verify_api_key
from app.schemas.predict_schema import PredictRequest, PredictResponse
from app.utils.logger import logger
from pydantic import BaseModel
import numpy as np
import joblib
import os

# Router
# router = APIRouter()

# MODEL_PATH = "app/model/random_forest_fitness_model.pkl"
# model = pickle.load(MODEL_PATH)

# @router.post("/predict", response_model=PredictResponse, dependencies=[Depends(verify_api_key)])
# def predict(data: PredictRequest):
#     if model is None:
#         logger.error("❌ Model belum dimuat.")
#         raise HTTPException(status_code=500, detail="Model not loaded")

#     try:
#         # Urutan fitur harus sama seperti saat training
#         features = [
#             data.age,
#             data.height,   # height_cm
#             data.weight,   # weight_kg
#             data.duration_minutes,
#             data.calories_burned,
#             data.avg_heart_rate,
#             data.hours_sleep,
#             data.stress_level,
#             data.daily_steps,
#             data.hydration,
#             data.bmi,
#             data.resting_heart_rate,
#             data.blood_pressure_systolic,
#             data.blood_pressure_diastolic,
#             data.gender,
#             data.activity_type,
#             data.intensity,
#             data.smoking_status
#         ]

#         X_new = np.array(features).reshape(1, -1)

#         prediction = model.predict(X_new)[0]
#         logger.info(f"✅ Request: {data.dict()} → Prediction: {prediction}")
#         return PredictResponse(prediction=str(prediction))

#     except Exception as e:
#         logger.exception("❌ Error saat prediksi")
#         raise HTTPException(status_code=500, detail=f"Prediction failed: {e}")

# Load model dari file .pkl

BASE_DIR = os.path.dirname(os.path.abspath(__file__))  # folder app/api
MODEL_PATH = os.path.join(BASE_DIR, "models", "random_forest_fitness_model.pkl")

with open(MODEL_PATH, "rb") as f:
   model = joblib.load(f)
    
# Inisialisasi FastAPI
router = APIRouter()

# Skema request
class PredictRequest(BaseModel):
    features: list[float]

# Endpoint root
@router.get("/")
def home():
    return {"message": "API Model is running"}

# Endpoint prediksi
@router.post("/predict")
def predict(request: PredictRequest):
    try:
        data = np.array(request.features).reshape(1, -1)
        prediction = model.predict(data)
        return {"prediction": prediction.tolist()}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
