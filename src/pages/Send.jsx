import React from 'react';
import { Link } from 'react-router-dom';
import './Send.css';

function Send() {
  return (
    <div className="screen">
      <Link to="/" className="back-button">← Back</Link>
      <h2>Send Crypto</h2>
      
      <form className="form">
        <input type="text" placeholder="Recipient Address" />
        <input type="number" placeholder="Amount" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Send;
