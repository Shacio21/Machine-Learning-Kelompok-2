from pydantic import BaseModel, Field

class CalculateBMIRequest(BaseModel):
    weight: float = Field(..., gt=0, description="Berat badan dalam kg")
    height: float = Field(..., gt=0, description="Tinggi badan dalam cm")

class CalculateBMIResponse(BaseModel):
    bmi: float
    category: str