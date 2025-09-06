import React from "react";

function Footer() {
  return (
    <footer style={{
      width: '100%',
      background: '#FA8072',
      color: '#fff',
      textAlign: 'center',
      padding: '18px 0',
      fontWeight: 500,
      fontSize: '1.1rem',
      letterSpacing: '0.5px',
      boxShadow: '0 -2px 8px rgba(0,0,0,0.07)',
      marginTop: 'auto',
    }}>
      &copy; {new Date().getFullYear()} To-Do Manager. Made with <span style={{color:'#fff'}}>♥</span> by Atheeq.
    </footer>
  );
}

export default Footer;
