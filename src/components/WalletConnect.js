import React, { useState } from "react";
import Web3 from "web3";
import "./WalletConnect.css"; // Import styles

const WalletConnect = () => {
  const [account, setAccount] = useState(null); // Initially, no account is connected
  const [web3, setWeb3] = useState(null);

  // Function to connect wallet and redirect to MetaMask
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts", // Triggers MetaMask to open the connection prompt
        });
        setAccount(accounts[0]); // Connect to the first account
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("Please install MetaMask to connect your wallet.");
    }
  };

  // Function to disconnect wallet and force reconnection
  const disconnectWallet = () => {
    setAccount(null); // Clear the account state
    window.ethereum.request({
      method: "eth_requestAccounts",
    }).catch((error) => console.log(error));
  };

  // Reset wallet connection on page load
  const resetConnection = async () => {
    setAccount(null); // Reset account to ensure no auto-connection
  };

  return (
    <div>
      {!account ? (
        // If no account is connected, show "Connect Wallet" button
        <button className="connect-wallet-button" onClick={connectWallet}>
          Connect Wallet
        </button>
      ) : (
        <div>
          <p>Connected Account: {account}</p>
          <button className="connect-wallet-button" onClick={disconnectWallet}>
            Disconnect Wallet
          </button>
        </div>
      )}
    </div>
  );
};

export default WalletConnect;
