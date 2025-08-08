from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np
from fastapi.middleware.cors import CORSMiddleware

# Load the trained model
model = joblib.load("sleep_quality_model.pkl")

# Create FastAPI app
app = FastAPI()

# Allow requests from any frontend (NestJS, etc.)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Input data model with exact feature names used in the model
class SleepData(BaseModel):
    ModeratelyActiveDistance: float
    LightActiveDistance: float
    FairlyActiveMinutes: float
    LightlyActiveMinutes: float
    Calories: float

# Prediction endpoint
@app.post("/predict")
def predict(data: SleepData):
    features = np.array([
        data.ModeratelyActiveDistance,
        data.LightActiveDistance,
        data.FairlyActiveMinutes,
        data.LightlyActiveMinutes,
        data.Calories
    ]).reshape(1, -1)

    prediction = model.predict(features)[0]
    label = "Good" if prediction == 1 else "Bad"

    return {"prediction": label}
