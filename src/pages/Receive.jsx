import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import './Receive.css'; 
import './Screen.css';  

function Receive() {
  const walletAddress = '0x1234567890abcdef1234567890abcdef12345678';

  return (
    <div className="receive">
      <h2>Receive Crypto</h2>

      <div className="qr-section">
        <QRCodeSVG value={walletAddress} size={160} />
        <p className="wallet-address">{walletAddress}</p>
      </div>

      <p>Scan this QR code or copy your address to receive funds.</p>
    </div>
  );
}

export default Receive;
