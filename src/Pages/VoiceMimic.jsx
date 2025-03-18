import { useState } from "react";
import VoiceSelector from "../components/VoiceSelector";
import FaceGeneration from "../components/FaceGeneration";
import TextToMimic from "../components/TextToMimic";
import AudioPlayer from "../components/AudioPlayer";

const VoiceMimic = () => {
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [audioSrc, setAudioSrc] = useState(null);

  const handleMimic = (text) => {
    if (!selectedVoice) return alert("Please select a voice first!");

    const fakeAudioUrl = `https://fake-audio.com/${selectedVoice}-mimic.mp3`;
    setAudioSrc(fakeAudioUrl);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      <div className="glass-box w-full max-w-3xl p-6 text-center">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-4 animate-bounce">
          Choose a Celebrity Voice
        </h2>
        <VoiceSelector onSelect={setSelectedVoice} />
        {selectedVoice && <FaceGeneration selectedVoice={selectedVoice} />}
        <TextToMimic onMimic={handleMimic} />
        {audioSrc && <AudioPlayer audioSrc={audioSrc} />}
      </div>
    </div>
  );
};

export default VoiceMimic;
