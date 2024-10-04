"use client";

import { getMockNFTById } from "../../utils/mockNFTData";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function NFTDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const nft = getMockNFTById(id as string);

  if (!nft) return <p>NFT not found</p>;

  return (
    <Container>
      <Image src={nft.imageUrl} alt={nft.title} />
      <Title>{nft.title}</Title>
      <Owner>Owned by {nft.owner}</Owner>
      <Description>
        This is a detailed description of the NFT. You can add more information
        here like rarity, history, and other metadata.
      </Description>
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

const Owner = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #777;
`;
