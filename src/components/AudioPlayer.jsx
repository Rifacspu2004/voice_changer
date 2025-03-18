import { useState, useRef } from "react";
import { Play, PauseCircle } from "lucide-react";

const AudioPlayer = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioSrc) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <audio ref={audioRef} src={audioSrc} onEnded={() => setIsPlaying(false)} />
      <button
        onClick={togglePlay}
        className={`flex items-center gap-2 px-6 py-3 rounded-full text-lg font-semibold transition-all shadow-lg
          ${isPlaying ? "bg-gradient-to-r from-red-400 to-pink-600 text-white" : "bg-gradient-to-r from-green-400 to-blue-600 text-white"} 
          hover:scale-110 active:scale-95`}
      >
        {isPlaying ? <PauseCircle size={24} /> : <Play size={24} />}
        {isPlaying ? "Pause Audio" : "Play Mimicked Voice"}
      </button>
    </div>
  );
};

export default AudioPlayer;
