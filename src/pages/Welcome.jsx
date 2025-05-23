import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <h1>Welcome</h1>
      <button onClick={() => navigate('/create-password')}>Create a New Wallet</button>
      <button onClick={() => navigate('/seed-phrase')}>I Already Have a Wallet</button>
    </div>
  );
};

export default Welcome;
