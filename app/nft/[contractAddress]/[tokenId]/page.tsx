"use client";

import { useEffect, useState } from "react";

import { NFT } from "./../../../../types/nftTypes";
import { fetchNFTDetails } from "../../../../utils/nftAPI";
import styled from "styled-components";
import { useParams } from "next/navigation";

export default function NFTDetailsPage() {
  const params = useParams();
  const contractAddress = Array.isArray(params.contractAddress)
    ? params.contractAddress[0]
    : params.contractAddress;
  const tokenId = Array.isArray(params.tokenId)
    ? params.tokenId[0]
    : params.tokenId;

  const [nft, setNFT] = useState<NFT | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNFT = async () => {
      try {
        const fetchedNFT = await fetchNFTDetails(contractAddress, tokenId);
        setNFT(fetchedNFT);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching NFT:", error);
        setLoading(false);
      }
    };

    loadNFT();
  }, [contractAddress, tokenId]);

  if (loading) return <p>Loading NFT...</p>;
  if (!nft) return <p>NFT not found</p>;

  return (
    <Container>
      <Image src={nft.metadata.image} alt={nft.metadata.name} />
      <Title>{nft.metadata.name}</Title>
      <Description>{nft.metadata.description}</Description>
    </Container>
  );
}

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

const Description = styled.p`
  font-size: 1rem;
  color: #777;
`;
