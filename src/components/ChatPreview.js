import React from 'react';

const ChatPreview = ({ config, onClose }) => {
  const previewStyle = {
    fontFamily: config.fontFamily,
    backgroundColor: config.backgroundColor,
    color: config.chatFontColor,
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Added shadow effect
    padding: '15px',
    width: '100%',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '400px',
        margin: 'auto',
        border: '1px solid #ccc',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Added shadow effect
        position: 'relative',
      }}
    >
      {/* Close Button */}
      <button
        style={{
          position: 'absolute',
          top: '5px',
          right: '5px',
          background: 'none',
          border: 'none',
          fontSize: '16px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
        onClick={onClose}
      >
        ✕
      </button>
      <div
        style={{
          backgroundColor: config.headerColor,
          color: config.headerFontColor,
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {config.avatarImage && (
          <img
            src={config.avatarImage}
            alt="Bot Avatar"
            style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }}
          />
        )}
        <strong>{config.botName}</strong>
      </div>
      <div style={previewStyle}>
        <p>Hi! How can I help you today?</p>
        <p>You can configure me in real-time!</p>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px',
          backgroundColor: '#F0F0F0',
          borderTop: '1px solid #ccc',
        }}
      >
        <input
          type="text"
          placeholder="Need help? Just say or type"
          style={{
            flex: '1',
            padding: '5px',
            marginRight: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <span style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/709/709586.png" // Microphone icon
            alt="Mic"
            style={{ width: '24px', height: '24px' }}
          />
        </span>
      </div>
    </div>
  );
};

export default ChatPreview;
