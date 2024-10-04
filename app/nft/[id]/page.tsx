"use client";

import { Web3Provider } from "@ethersproject/providers";
import { getMockNFTById } from "../../../utils/mockNFTData";
import styled from "styled-components";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function NFTDetailsPage() {
  const { id } = useParams();
  const nftId = Array.isArray(id) ? id[0] : id;

  const [isBuying, setIsBuying] = useState(false);
  const [transactionHash, setTransactionHash] = useState<string | null>(null);

  const nft = getMockNFTById(nftId);

  if (!nft) return <p>NFT not found</p>;

  const buyNFT = async () => {
    if (window.ethereum) {
      try {
        setIsBuying(true); // Show loading state
        const provider = new Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const tx = await signer.sendTransaction({
          to: "0xNFTSellerAddress", // Simulated seller address
          value: ethers.utils.parseEther("0.01"), // Simulated price
        });
        setTransactionHash(tx.hash); // Store transaction hash
        setIsBuying(false);
      } catch (err) {
        console.error("Error buying NFT:", err);
        setIsBuying(false);
      }
    } else {
      alert("MetaMask is not installed!");
    }
  };

  return (
    <Container>
      <Image src={nft.imageUrl} alt={nft.title} />
      <Title>{nft.title}</Title>
      <Owner>Owned by {nft.owner}</Owner>
      <Description>
        This is a detailed description of the NFT. You can add more information
        here like rarity, history, and other metadata.
      </Description>

      <BuyButton onClick={buyNFT} disabled={isBuying}>
        {isBuying ? "Buying..." : "Buy NFT for 0.01 ETH"}
      </BuyButton>

      {transactionHash && (
        <SuccessMessage>
          Purchase successful! Transaction hash: {transactionHash}
        </SuccessMessage>
      )}
    </Container>
  );
}

// Styled components for the NFT details page
const Container = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Image = styled.img`
  width: 300px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Owner = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #777;
`;

const BuyButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s;

  &:disabled {
    background-color: #ccc;
  }

  &:hover:not(:disabled) {
    background-color: #005bb5;
  }
`;

const SuccessMessage = styled.p`
  color: green;
  margin-top: 1rem;
  font-size: 0.9rem;
`;
