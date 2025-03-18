import { useState } from "react";

const TextToMimic = ({ onMimic }) => {
  const [text, setText] = useState("");

  return (
    <div className="mt-4">
      <textarea
        className="w-full p-2 bg-gray-800 text-white border border-gray-600"
        rows="4"
        placeholder="Enter text to mimic..."
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        onClick={() => onMimic(text)}
        className="mt-2 px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg"
      >
        Mimic Voice
      </button>
    </div>
  );
};

export default TextToMimic;
