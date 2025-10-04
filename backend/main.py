from fastapi import FastAPI, UploadFile, File, Form
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from utils import scale_image
import io

app = FastAPI()

# Allow requests from frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Backend is running!"}

@app.post("/scale")
async def scale_image_api(file: UploadFile = File(...), scale: float = Form(1.0)):
    contents = await file.read()
    scaled_img = scale_image(contents, scale)
    return StreamingResponse(io.BytesIO(scaled_img), media_type="image/png")
