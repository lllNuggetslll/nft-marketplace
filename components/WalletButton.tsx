"use client";

import { Web3Provider } from "@ethersproject/providers";
import styled from "styled-components";
import { useWallet } from "../context/WalletContext";

const WalletButton = () => {
  const { account, setAccount } = useWallet();

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new Web3Provider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);
      } catch (err) {
        console.error("Error connecting to wallet:", err);
      }
    } else {
      alert("MetaMask is not installed!");
    }
  };

  return (
    <Button onClick={connectWallet}>
      {account ? `Connected` : "Connect Wallet"}
    </Button>
  );
};

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005bb5;
  }
`;

export default WalletButton;
