import { ethers, Mnemonic, HDNodeWallet } from "ethers";

export function generateSeedPhrase() {
  const wallet = ethers.Wallet.createRandom();
  return wallet.mnemonic.phrase;
}

export function createWalletFromPhrase(mnemonic) {
  try {
    const phrase = Mnemonic.fromPhrase(mnemonic);
    const wallet = HDNodeWallet.fromMnemonic(phrase);
    return wallet;
  } catch (err) {
    console.error("Invalid seed phrase:", err);
    return null;
  }
}

export function getWalletAddress(wallet) {
  return wallet.address;
}

export function getReceiveAddress(wallet) {
  return wallet.address;
}
