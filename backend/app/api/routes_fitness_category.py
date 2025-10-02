from fastapi import APIRouter, Depends
from app.core.security import verify_api_key
from app.schemas.fitness_category_shcema import FitnessCategoryRequest, FitnessCategoryResponse

router = APIRouter()

@router.post("/fitness-category", response_model=FitnessCategoryResponse, dependencies=[Depends(verify_api_key)])
def categorize_fitness(data: FitnessCategoryRequest):
    prediction = data.prediction
    if prediction < 5:
        category = "Very-Low"
    elif 5 <= prediction < 10:
        category = "Low"
    elif 10 <= prediction < 15:
        category = "Medium"
    elif 15 <= prediction < 20:
        category = "High"
    elif prediction >= 20:
        category = "Very-High"
    return FitnessCategoryResponse(category=category)