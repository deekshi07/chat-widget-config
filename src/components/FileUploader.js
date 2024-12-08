import React from 'react';

const FileUploader = ({ setConfig }) => {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (!file) {
      alert('No file selected');
      return;
    }

    // Check if the file type is JSON
    if (file.type !== 'application/json') {
      alert('Please upload a valid JSON file');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const json = JSON.parse(reader.result);
        setConfig(json); // Update the config state with the parsed JSON
      } catch (error) {
        alert('Invalid JSON file');
        console.error('Error parsing JSON:', error);
      }
    };
    reader.onerror = () => {
      alert('Error reading file');
    };

    reader.readAsText(file);
  };

  return (
    <div className="mt-3">
      <label className="form-label">Load Configuration</label>
      <input
        type="file"
        className="form-control"
        accept="application/json"
        onChange={handleFileUpload}
      />
    </div>
  );
};

export default FileUploader;
