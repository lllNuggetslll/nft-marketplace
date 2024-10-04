"use client";
const DEFAULT_WALLET_ID = process.env.NEXT_PUBLIC_DEFAULT_WALLET_ID;

import { useEffect, useState } from "react";

import { NFT } from "./../types/nftTypes";
import NFTCard from "../components/NFTCard";
import { fetchNFTs } from "../utils/nftAPI";
import styled from "styled-components";
import { useWallet } from "../context/WalletContext";

export default function Home() {
  const [nfts, setNFTs] = useState<NFT[]>([]);
  const [loading, setLoading] = useState(true);
  const { account } = useWallet();

  useEffect(() => {
    console.log(process.env.DEFAULT_WALLET_ID);
    const loadNFTs = async () => {
      try {
        const fetchedNFTs = await fetchNFTs(
          account || (DEFAULT_WALLET_ID as string)
        );
        setNFTs(fetchedNFTs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching NFTs:", error);
        setLoading(false);
      }
    };

    loadNFTs();
  }, [account]);

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
