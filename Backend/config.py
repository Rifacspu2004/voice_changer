import os

class Config:
    UPLOAD_FOLDER = "uploads"
    SECRET_KEY = os.environ.get("SECRET_KEY") or "supersecretkey"
