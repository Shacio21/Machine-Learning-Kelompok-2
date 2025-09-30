from pydantic import BaseModel, Field

class CalculateMAXHRRequest(BaseModel):
    age: int = Field(..., ge=10, le=100, description="Umur (10-100 tahun)")

class CalculateMAXHRResponse(BaseModel):
    max_hr: int