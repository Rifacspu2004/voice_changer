const voices = ["Joseph Vijay", "Rajinikanth", "Kamal Haasan", "Ajith Kumar", "Suriya"];

const VoiceSelector = ({ onSelect }) => {
  return (
    <select
      className="p-2 mt-4 bg-gray-700 text-white border border-gray-500"
      onChange={(e) => onSelect(e.target.value)}
    >
      <option value="">Select a Voice</option>
      {voices.map((voice, index) => (
        <option key={index} value={voice}>{voice}</option>
      ))}
    </select>
  );
};

export default VoiceSelector;
