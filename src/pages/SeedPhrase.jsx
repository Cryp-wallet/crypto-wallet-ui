import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SeedPhrase.css';
import wordlist from '../utils/wordlist';

function SeedPhrase() {
  const [visible, setVisible] = useState(false);
  const [seedPhrase, setSeedPhrase] = useState(generateRandomSeed());

  function generateRandomSeed() {
    const words = [];
    for (let i = 0; i < 12; i++) {
      const index = Math.floor(Math.random() * wordlist.length);
      words.push(wordlist[index]);
    }
    return words;
  }

  const handleCopy = () => {
    const text = seedPhrase.join(' ');
    navigator.clipboard.writeText(text);
    alert('✅ Seed phrase copied to clipboard!');
  };

  const handleRegenerate = () => {
    setSeedPhrase(generateRandomSeed());
    setVisible(false);
  };

  return (
    <div className="seed-phrase">
      <h2>Secret Recovery Phrase</h2>
      <p className="warning">⚠️ Never share this with anyone. Store it securely!</p>

      <button className="reveal-btn" onClick={() => setVisible(!visible)}>
        {visible ? 'Hide Phrase' : 'Reveal Phrase'}
      </button>

      {visible && (
        <div className="phrase-box">
          {seedPhrase.map((word, index) => (
            <span key={index} className="word">{index + 1}. {word}</span>
          ))}
        </div>
      )}

      {visible && (
        <>
          <button className="copy-btn" onClick={handleCopy}>Copy to Clipboard</button>
          <button className="reveal-btn" onClick={handleRegenerate}>🔁 Generate New Phrase</button>
        </>
      )}
      <button>
        <Link to="/confirm-seed" className="copy-btn">
        Next
      </Link>
      </button>
    </div>
  );
}

export default SeedPhrase;
