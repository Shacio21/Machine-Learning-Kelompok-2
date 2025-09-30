from pydantic import BaseModel, Field

class PredictRequest(BaseModel):
    age: int = Field(..., ge=10, le=100, description="Umur (10-100 tahun)")
    weight: float = Field(..., gt=0, description="Berat badan dalam kg")
    height: float = Field(..., gt=0, description="Tinggi badan dalam cm")
    activity_level: str = Field(..., description="Level aktivitas (low, medium, high)")

class PredictResponse(BaseModel):
    level: str
    confidence: float
