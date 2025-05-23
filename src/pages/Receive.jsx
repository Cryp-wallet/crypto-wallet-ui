import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import {
  generateSeedPhrase,
  createWalletFromPhrase,
  getReceiveAddress,
} from '../utils/wallet';
import './Receive.css'; 

const Receive = () => {
  const [address, setAddress] = useState('');

  useEffect(() => {
    const phrase = generateSeedPhrase();
    const wallet = createWalletFromPhrase(phrase);
    const addr = getReceiveAddress(wallet);
    setAddress(addr);
  }, []);

  return (
    <div className="receive">
      <h2>Receive</h2>
      <div className="qr-section">
        <QRCodeSVG value={address} size={160} />
        <div className="wallet-address">{address}</div>
      </div>
    </div>
  );
};

export default Receive;
