from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from werkzeug.utils import secure_filename
from voice_processing import process_voice

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing

# Upload folder for user voice files
UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

@app.route('/')
def home():
    return jsonify({"message": "Welcome to RIFATH'S MIMICRY API"})

@app.route('/mimic', methods=['POST'])
def mimic_voice():
    """Handles voice mimicry requests"""
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files['file']
    voice_type = request.form.get('voice_type')

    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    # Secure the file name and save it
    filename = secure_filename(file.filename)
    filepath = os.path.join(app.config["UPLOAD_FOLDER"], filename)
    file.save(filepath)

    # Process the voice with AI (placeholder function)
    mimicked_voice_path = process_voice(filepath, voice_type)

    return jsonify({"mimicked_voice_url": mimicked_voice_path})

if __name__ == '__main__':
    app.run(debug=True)
