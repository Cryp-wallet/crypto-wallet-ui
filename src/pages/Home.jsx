import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1 className="balance">0.00 ETH</h1>

      <div className="actions">
        <Link to="/send">Send</Link>
        <Link to="/receive">Receive</Link>
        <Link to="/swap">Swap</Link>
      </div>

      <p className="networks-title">Popular Networks</p>

      <div className="networks">
        <div>
          <img src="/icons/eth.svg" alt="Ethereum" />
          <p>Ethereum</p>
        </div>
      </div>

      {/* TEMP: Seed Phrase Access Button  */}
      <div style={{ marginTop: '20px' }}>
        <Link to="/seed-phrase" style={{ color: '#007bff', textDecoration: 'underline' }}>
          View Seed Phrase (Temporary)
        </Link>
      </div>
    </div>
  );
}

export default Home;
