import { useState } from "react";

const FaceGeneration = ({ selectedVoice }) => {
  const [imageSrc, setImageSrc] = useState("");

  const generateFace = () => {
    // Mock AI-generated image URL
    const fakeImageUrl = `https://fake-actor-images.com/${selectedVoice}.jpg`;
    setImageSrc(fakeImageUrl);
  };

  return (
    <div className="mt-4">
      <button
        onClick={generateFace}
        className="px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg"
      >
        Generate {selectedVoice}'s Face
      </button>
      {imageSrc && <img src={imageSrc} alt="Generated Face" className="mt-4 rounded-lg shadow-lg" />}
    </div>
  );
};

export default FaceGeneration;
