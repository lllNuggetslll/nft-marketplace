import Link from "next/link";
import styled from "styled-components";

interface NFTProps {
  nft: {
    contract: {
      address: string;
    };
    id: {
      tokenId: string;
    };
    title: string;
    media: [
      {
        gateway: string;
      }
    ];
  };
}

const NFTCard = ({ nft }: NFTProps) => {
  const tokenIdDecimal = BigInt(nft.id.tokenId).toString();

  return (
    <Link href={`/nft/${nft.contract.address}/${tokenIdDecimal}`} passHref>
      <Card>
        <Image
          src={nft.media[0]?.gateway || "/fallback-image.png"}
          alt={nft.title}
        />
        <Title>{nft.title}</Title>
      </Card>
    </Link>
  );
};

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  background-color: #fff;
  text-align: center;
  transition: box-shadow 0.3s;
  cursor: pointer;

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

export default NFTCard;
