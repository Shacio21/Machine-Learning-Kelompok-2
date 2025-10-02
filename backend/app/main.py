from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from app.api import routes_calculate_maxhr, routes_health, routes_predict, routes_calculate_bmi

app = FastAPI(
    title="Fitness Level API",
    description="API untuk prediksi tingkat fitness (dummy version, belum ada model ML).",
    version="0.1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(routes_health.router)
app.include_router(routes_predict.router)
app.include_router(routes_calculate_maxhr.router)
app.include_router(routes_calculate_bmi.router)
