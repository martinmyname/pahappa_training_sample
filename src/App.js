import './App.css';
import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    console.log('Sign up button clicked');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',  backgroundColor: '#ADD8E6' }}>
      <div style={{ border: '1px solid #ddd', padding: '4rem', borderRadius: '0.5rem', backgroundColor: '#FAFAFA' }}>
        <h2 style={{ marginBottom: '1rem' , paddingLeft:'100px', paddingBottom:'20px' }}>Login</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="username" style={{ marginRight: '1rem' }}>Username:</label>
            <input type="text" id="username" value={username} onChange={handleUsernameChange} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="password" style={{ marginRight: '1rem' }}>Password:</label>
            <input type="password" id="password" value={password} onChange={handlePasswordChange} />
          </div>
          <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#1c56a5', color: '#fff', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }}>Login</button>
         <p>Already have an account?</p>
          <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#6ebe46', color: '#fff', border: 'none', borderRadius: '0.25rem', cursor: 'pointer' }} onClick={handleSignUpSubmit}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default App;
