import React, { useState, useEffect } from 'react';
import './SeedPhrase.css';

function ConfirmSeed({ seedPhrase }) {
  const [indices, setIndices] = useState([]);
  const [inputs, setInputs] = useState({});
  const [status, setStatus] = useState('');

  useEffect(() => {
    const selected = [];
    while (selected.length < 3) {
      const random = Math.floor(Math.random() * 12);
      if (!selected.includes(random)) selected.push(random);
    }
    setIndices(selected.sort((a, b) => a - b));
  }, []);

  const handleChange = (index, value) => {
    setInputs({ ...inputs, [index]: value.trim().toLowerCase() });
  };

  const handleSubmit = () => {
    const isCorrect = indices.every(i => inputs[i] === seedPhrase[i]);
    if (isCorrect) {
      setStatus('✅ Confirmed! You entered the correct seed words.');
    } else {
      setStatus('❌ Incorrect. Please double-check the words.');
    }
  };

  return (
    <div className="seed-phrase">
      <h2>Confirm Seed Phrase</h2>
      <p>Please enter the following words from your seed phrase:</p>

      {indices.map(i => (
        <div key={i}>
          <label>Word #{i + 1}</label>
          <input
            type="text"
            onChange={e => handleChange(i, e.target.value)}
            className="confirm-input"
          />
        </div>
      ))}

      <button className="copy-btn" onClick={handleSubmit}>Confirm</button>
      {status && <p className="warning">{status}</p>}
    </div>
  );
}

export default ConfirmSeed;
