import React from "react";

function Toast({ message, open, onClose }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed',
      left: '50%',
      bottom: 32,
      transform: 'translateX(-50%)',
      background: '#FA8072',
      color: '#fff',
      padding: '16px 32px',
      borderRadius: 12,
      fontWeight: 500,
      fontSize: '1.1rem',
      boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
      zIndex: 9999,
      transition: 'opacity 0.3s',
      opacity: open ? 1 : 0,
    }}>
      {message}
      <span style={{ marginLeft: 16, cursor: 'pointer', fontWeight: 700 }} onClick={onClose}>×</span>
    </div>
  );
}

export default Toast;
