import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import './Swap.css';

function Swap() {
  const tokenOptions = [
    { value: 'eth', label: 'ETH' },
    { value: 'usdc', label: 'USDC' },
    { value: 'matic', label: 'MATIC' },
    { value: 'bnb', label: 'BNB' },
  ];

  const [fromToken, setFromToken] = useState(null);
  const [toToken, setToToken] = useState(null);
  const [amount, setAmount] = useState('');

  const handleSwap = () => {
    if (!fromToken || !toToken || !amount) {
      alert('Please fill out all fields!');
      return;
    }
    alert(`Swapping ${amount} ${fromToken.label} to ${toToken.label}`);
  };

  return (
    <div className="swap">
      <Link to="/home" className="back-button">← Back</Link>
      <h2>Token Swap</h2>

      <div className="select-row">
        <label>From:</label>
        <Select options={tokenOptions} onChange={setFromToken} placeholder="Select token" />
      </div>

      <div className="select-row">
        <label>To:</label>
        <Select options={tokenOptions} onChange={setToToken} placeholder="Select token" />
      </div>

      <div className="amount-row">
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </div>

      <button onClick={handleSwap}>Swap</button>
    </div>
  );
}

export default Swap;
