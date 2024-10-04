import styled from "styled-components";

interface NFTProps {
  nft: {
    id: string;
    title: string;
    imageUrl: string;
    owner: string;
  };
}

const NFTCard = ({ nft }: NFTProps) => {
  return (
    <Card>
      <Image src={nft.imageUrl} alt={nft.title} />
      <Title>{nft.title}</Title>
      <Owner>Owned by {nft.owner}</Owner>
    </Card>
  );
};

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  background-color: #fff;
  text-align: center;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const Title = styled.h2`
  margin: 1rem 0;
  font-size: 1.25rem;
`;

const Owner = styled.p`
  color: #555;
  font-size: 0.9rem;
`;

export default NFTCard;
