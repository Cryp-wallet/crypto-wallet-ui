import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getEthBalance } from "../utils/balance"; 
import "./Home.css";

function Home() {
  const [balance, setBalance] = useState("Loading...");
  const wallet = { address: "0x123...abc" }; 

  useEffect(() => {
  const fetchBalance = async () => {
    console.log('Fetching mock ETH balance...');
    const ethBalance = await getEthBalance(wallet.address);
    setBalance(ethBalance);
  };
  fetchBalance();
}, [wallet.address]);

  return (
    <div className="home">
      <h1 className="balance">{balance}</h1>
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

      <div style={{ marginTop: "20px" }}>
        <Link
          to="/seed-phrase"
          style={{ color: "#007bff", textDecoration: "underline" }}
        >
          View Seed Phrase (Temporary)
        </Link>
      </div>
    </div>
  );
}

export default Home;
