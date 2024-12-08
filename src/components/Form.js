import React from 'react';
import { SketchPicker } from 'react-color';

const Form = ({ config, setConfig }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setConfig((prev) => ({ ...prev, [name]: value }));
  };

  const handleColorChange = (name, color) => {
    setConfig((prev) => ({ ...prev, [name]: color.hex }));
  };

  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Config Name</label>
        <input
          type="text"
          name="configName"
          className="form-control"
          value={config.configName}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Bot Name</label>
        <input
          type="text"
          name="botName"
          className="form-control"
          value={config.botName}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Font Family</label>
        <select
          name="fontFamily"
          className="form-select"
          value={config.fontFamily}
          onChange={handleInputChange}
        >
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
          <option value="Tahoma">Tahoma</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Georgia">Georgia</option>
          <option value="Courier New">Courier New</option>
          <option value="Lucida Console">Lucida Console</option>
          <option value="Trebuchet MS">Trebuchet MS</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Font Size</label>
        <select
          name="fontSize"
          className="form-select"
          value={config.fontSize}
          onChange={handleInputChange}
        >
          <option value="12px">12px</option>
          <option value="14px">14px</option>
          <option value="16px">16px</option>
          <option value="18px">18px</option>
          <option value="20px">20px</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Border Radius</label>
        <input
          type="range"
          name="borderRadius"
          className="form-range"
          min="0"
          max="50"
          value={config.borderRadius.replace('px', '')}
          onChange={(e) =>
            setConfig((prev) => ({
              ...prev,
              borderRadius: `${e.target.value}px`,
            }))
          }
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Header Color</label>
        <SketchPicker
          color={config.headerColor}
          onChangeComplete={(color) => handleColorChange('headerColor', color)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Header Font Color</label>
        <SketchPicker
          color={config.headerFontColor}
          onChangeComplete={(color) =>
            handleColorChange('headerFontColor', color)
          }
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Background Color</label>
        <SketchPicker
          color={config.backgroundColor}
          onChangeComplete={(color) =>
            handleColorChange('backgroundColor', color)
          }
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Chat Font Color</label>
        <SketchPicker
          color={config.chatFontColor}
          onChangeComplete={(color) =>
            handleColorChange('chatFontColor', color)
          }
        />
      </div>
    </form>
  );
};

export default Form;
