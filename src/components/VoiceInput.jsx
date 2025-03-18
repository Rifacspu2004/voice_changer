import { useState } from "react";

const VoiceInput = () => {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="text-center">
      <input type="file" className="mt-4 p-2" onChange={handleFileUpload} />
      {file && <p className="text-gray-300 mt-2">Uploaded: {file.name}</p>}
    </div>
  );
};

export default VoiceInput;
