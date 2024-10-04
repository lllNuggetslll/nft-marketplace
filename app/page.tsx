"use client";

import NFTCard from "../components/NFTCard";
import { getMockNFTs } from "../utils/mockNFTData";
import styled from "styled-components";

export default function Home() {
  const nfts = getMockNFTs();

  return (
    <Container>
      <Title>Explore NFTs</Title>
      <Grid>
        {nfts.map((nft) => (
          <NFTCard key={nft.id} nft={nft} />
        ))}
      </Grid>
    </Container>
  );
}

// Styled components for layout
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
