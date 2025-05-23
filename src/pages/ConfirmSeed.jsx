import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ConfirmSeed.css';

const ConfirmSeed = () => {
  const [seedWords, setSeedWords] = useState([]);
  const [userInputs, setUserInputs] = useState({});
  const [missingIndices, setMissingIndices] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedPhrase = localStorage.getItem('tempSeed');
    if (!storedPhrase) {
      setError('No seed phrase found');
      return;
    }

    const words = storedPhrase.split(' ');
    setSeedWords(words);

    const missing = new Set();
    while (missing.size < 3) {
      const randIndex = Math.floor(Math.random() * 12);
      missing.add(randIndex);
    }
    setMissingIndices(Array.from(missing));
  }, []);

  const handleChange = (index, value) => {
    setUserInputs(prev => ({ ...prev, [index]: value.trim().toLowerCase() }));
  };

  const handleSubmit = () => {
    const isCorrect = missingIndices.every(index => {
      return userInputs[index] === seedWords[index];
    });

    if (isCorrect) {
      alert('✅ Seed phrase confirmed!');
      navigate('/home');
    } else {
      setError('❌ Incorrect words. Please try again.');
    }
  };

  return (
    <div className="confirm-seed-container">
      <h2>Confirm Your Seed Phrase</h2>
      <div className="seed-grid">
        {seedWords.map((word, index) => (
          <div key={index} className="seed-word">
            <span className="index">{index + 1}.</span>
            {missingIndices.includes(index) ? (
              <input
                type="text"
                value={userInputs[index] || ''}
                onChange={e => handleChange(index, e.target.value)}
              />
            ) : (
              <span className="word">{word}</span>
            )}
          </div>
        ))}
      </div>
      {error && <p className="error">{error}</p>}
      <button onClick={handleSubmit} className="confirm-btn">Confirm</button>
    </div>
  );
};

export default ConfirmSeed;
