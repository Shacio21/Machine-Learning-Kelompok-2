from pydantic import BaseModel, Field

class PredictRequest(BaseModel):
    age: float = Field(..., ge=10, le=100, description="Umur (10-100 tahun)")
    height_cm: float = Field(..., gt=0, description="Tinggi badan dalam cm")
    weight_kg: float = Field(..., gt=0, description="Berat badan dalam kg")
    duration_minutes: float = Field(..., ge=0, description="Durasi olahraga per menit")
    calories_burned: float = Field(..., ge=0, description="Kalori terbakar")
    avg_heart_rate: float = Field(..., ge=30, le=220, description="Detak jantung rata-rata")
    hours_sleep: float = Field(..., ge=0, le=24, description="Jam tidur per hari")
    stress_level: float = Field(..., ge=1, le=10, description="Tingkat stres (1-10)")
    daily_steps: float = Field(..., ge=0, description="Jumlah langkah harian")
    hydration_level: float = Field(..., ge=0, description="Asupan air harian (liter)")
    bmi: float = Field(..., gt=0, description="Body Mass Index (BMI)")
    resting_heart_rate: int = Field(..., ge=30, le=200, description="Detak jantung istirahat")
    blood_pressure_systolic: float = Field(..., ge=80, le=200, description="Tekanan darah sistolik")
    blood_pressure_diastolic: float = Field(..., ge=50, le=130, description="Tekanan darah diastolik")
    gender: str = Field(..., description="Jenis kelamin (Male/Female)")
    activity_type: str = Field(..., description="Jenis aktivitas (Cycling, HIIT, Walking, Dancing, Weight_Training, Yoga, Tennis, Basketball, Swimming, Running)")
    intensity: str = Field(..., description="Intensitas (Low/Medium/High)")
    smoking_status: str = Field(..., description="Status merokok (Yes/No/Former)")

class PredictResponse(BaseModel):
    prediction: float = Field(..., description="Prediksi tingkat fitness")
