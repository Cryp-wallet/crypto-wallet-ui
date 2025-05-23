import React, { useEffect, useState } from "react";
import { generateSeedPhrase } from "../utils/wallet";
import { useNavigate } from "react-router-dom";
import "./SeedPhrase.css";

const SeedPhrase = () => {
  const [seedPhrase, setSeedPhrase] = useState("");
  const [revealed, setRevealed] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const phrase = generateSeedPhrase();
    setSeedPhrase(phrase);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(seedPhrase);
    alert("Seed phrase copied to clipboard!");
  };

  return (
    <div className="seed-phrase-container">
      <h2>Your Seed Phrase</h2>

      {!revealed ? (
        <div className="hidden-message">************ (Hidden)</div>
      ) : (
        <div className="seed-grid">
          {seedPhrase.split(" ").map((word, index) => (
            <div key={index} className="seed-word">
              <span className="index">{index + 1}.</span> {word}
            </div>
          ))}
        </div>
      )}

      <button onClick={() => setRevealed(!revealed)} className="reveal-btn">
        {revealed ? "Hide Seed Phrase" : "Reveal Seed Phrase"}
      </button>

      {revealed && (
        <button onClick={handleCopy} className="copy-btn">
          Copy to Clipboard
        </button>
      )}

      <button
        onClick={() => {
          localStorage.setItem("tempSeed", seedPhrase);
          navigate("/confirm-seed");
        }}
        className="next-btn"
      >
        Next
      </button>
    </div>
  );
};

export default SeedPhrase;
