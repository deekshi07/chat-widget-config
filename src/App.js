import React, { useState } from 'react';
import Form from './components/Form';
import ChatPreview from './components/ChatPreview';
import FileUploader from './components/FileUploader';
import { downloadConfig } from './utils/fileUtils';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [config, setConfig] = useState({
    configName: '',
    botName: 'Greebo',
    fontFamily: 'Arial',
    headerColor: '#E63A1E',
    headerFontColor: '#FFFFFF',
    backgroundColor: '#E8E1DB',
    chatFontColor: '#323130',
    avatarImage: '',
    launcherImage: ''
  });

  // Handle configuration changes
  const handleConfigChange = (e) => {
    const { name, value } = e.target;
    setConfig({
      ...config,
      [name]: value
    });
  };

  // Handle image uploads
  const handleImageUpload = (e, imageType) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setConfig({
          ...config,
          [imageType]: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container-fluid p-5">
      <div className="row">
        <div className="col-md-6">
          <h2>Chat Widget Configuration</h2>
          <div className="form-group">
            <label>Config Name</label>
            <input
              type="text"
              className="form-control"
              name="configName"
              value={config.configName}
              onChange={handleConfigChange}
            />
          </div>

          <div className="form-group">
            <label>Bot Name</label>
            <input
              type="text"
              className="form-control"
              name="botName"
              value={config.botName}
              onChange={handleConfigChange}
            />
          </div>

          <div className="form-group">
            <label>Font Family</label>
            <select
              className="form-control"
              name="fontFamily"
              value={config.fontFamily}
              onChange={handleConfigChange}
            >
              <option>Arial</option>
              <option>Verdana</option>
              <option>Tahoma</option>
              <option>Space Grotesk, sans-serif</option>
              <option>Georgia, serif</option>
            </select>
          </div>

          <div className="form-group">
            <label>Header Color</label>
            <input
              type="color"
              className="form-control"
              name="headerColor"
              value={config.headerColor}
              onChange={handleConfigChange}
            />
          </div>

          <div className="form-group">
            <label>Header Font Color</label>
            <input
              type="color"
              className="form-control"
              name="headerFontColor"
              value={config.headerFontColor}
              onChange={handleConfigChange}
            />
          </div>

          <div className="form-group">
            <label>Background Color</label>
            <input
              type="color"
              className="form-control"
              name="backgroundColor"
              value={config.backgroundColor}
              onChange={handleConfigChange}
            />
          </div>

          <div className="form-group">
            <label>Chat Font Color</label>
            <input
              type="color"
              className="form-control"
              name="chatFontColor"
              value={config.chatFontColor}
              onChange={handleConfigChange}
            />
          </div>

          <div className="form-group">
            <label>Avatar Image</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, 'avatarImage')}
            />
            {config.avatarImage && (
              <img src={config.avatarImage} alt="Avatar" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
            )}
          </div>

          <div className="form-group">
            <label>Launcher Image</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, 'launcherImage')}
            />
            {config.launcherImage && (
              <img src={config.launcherImage} alt="Launcher" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
            )}
          </div>
        </div>

        <div className="col-md-6">
          <h2>Live Preview</h2>
          <ChatPreview config={config} />
        </div>
      </div>
    </div>
  );
}

export default App;
