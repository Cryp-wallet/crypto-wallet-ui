import React, { useEffect, useState } from 'react';
import { generateSeedPhrase } from '../utils/wallet';
import './SeedPhrase.css';     

const SeedPhrase = () => {
  const [seedPhrase, setSeedPhrase] = useState("");

  useEffect(() => {
    const phrase = generateSeedPhrase();
    setSeedPhrase(phrase);
  }, []);

  return (
    <div className="seed-phrase-container">
      <h2>Your Seed Phrase</h2>
      <div className="seed-grid">
        {seedPhrase.split(" ").map((word, index) => (
          <div key={index} className="seed-word">
            <span className="index">{index + 1}.</span> {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeedPhrase;
