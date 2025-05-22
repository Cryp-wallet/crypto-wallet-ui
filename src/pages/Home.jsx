import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

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
        <div className="network-card">
          <img src="/icons/eth.svg" alt="Ethereum" />
          <span>Ethereum</span>
        </div>
        <div className="network-card">
          <img src="/icons/polygon.svg" alt="Polygon" />
          <span>Polygon</span>
        </div>
        <div className="network-card">
          <img src="/icons/bnb.svg" alt="BNB Chain" />
          <span>BNB Chain</span>
        </div>
        <div className="network-card">
          <img src="/icons/arbitrum.svg" alt="Arbitrum" />
          <span>Arbitrum</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
