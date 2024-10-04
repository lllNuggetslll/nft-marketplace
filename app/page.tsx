"use client";

import { useEffect, useState } from "react";

import { NFT } from "./../types/nftTypes";
import NFTCard from "../components/NFTCard";
import { fetchNFTs } from "../utils/nftAPI";
import styled from "styled-components";

export default function Home() {
  const [nfts, setNFTs] = useState<NFT[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNFTs = async () => {
      try {
        const fetchedNFTs = await fetchNFTs(
          "0xf989750817ed768e1431e19507f9d7358b8f196d"
        );
        setNFTs(fetchedNFTs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching NFTs:", error);
        setLoading(false);
      }
    };

    loadNFTs();
  }, []);

  if (loading) return <p>Loading NFTs...</p>;

  return (
    <Container>
      <Title>Explore NFTs</Title>
      <Grid>
        {nfts.map((nft) => (
          <NFTCard key={BigInt(nft.id.tokenId).toString()} nft={nft} />
        ))}
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
`;
