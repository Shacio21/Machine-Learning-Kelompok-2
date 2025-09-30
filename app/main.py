from fastapi import FastAPI
from pydantic import BaseModel, Field
from app.api import routes_calculate_maxhr, routes_health, routes_predict

app = FastAPI(
    title="Fitness Level API",
    description="API untuk prediksi tingkat fitness (dummy version, belum ada model ML).",
    version="0.1.0"
)

# Include routers
app.include_router(routes_health.router)
app.include_router(routes_predict.router)
app.include_router(routes_calculate_maxhr.router)