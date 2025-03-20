from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename
import os
from voice_processing import process_voice

routes = Blueprint("routes", __name__)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@routes.route("/mimic", methods=["POST"])
def mimic_voice():
    """Handles voice mimicry requests"""
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    voice_type = request.form.get("voice_type")

    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400

    filename = secure_filename(file.filename)
    filepath = os.path.join(UPLOAD_FOLDER, filename)
    file.save(filepath)

    mimicked_voice_path = process_voice(filepath, voice_type)
    return jsonify({"mimicked_voice_url": mimicked_voice_path})
