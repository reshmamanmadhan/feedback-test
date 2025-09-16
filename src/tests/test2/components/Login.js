import React from 'react';

const Login = ({ user, onLogin, onLogout, usernameRef }) => {
  return !user ? (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Enter Username"
        ref={usernameRef}
        style={{ padding: '8px', marginRight: '10px' }}
      />
      <button onClick={onLogin} style={{ padding: '8px' }}>
        Login
      </button>
    </div>
  ) : (
    <div style={{ marginBottom: '20px' }}>
      <span>
        👤 Welcome, <strong>{user}</strong>
      </span>
      <button
        onClick={onLogout}
        style={{
          marginLeft: '15px',
          padding: '8px',
          background: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Login;
