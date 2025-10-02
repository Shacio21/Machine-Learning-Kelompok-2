from pydantic import BaseModel, Field

class FitnessCategoryRequest(BaseModel):
    prediction: float = Field(..., description="Prediksi tingkat fitness")
    
class FitnessCategoryResponse(BaseModel):
    category: str = Field(..., description="Kategori tingkat fitness")
