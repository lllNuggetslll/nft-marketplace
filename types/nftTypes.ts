export interface NFT {
  contract: {
    address: string;
  };
  id: {
    tokenId: string;
    tokenMetadata: {
      tokenType: string;
    };
  };
  title: string;
  media: [
    {
      gateway: string;
    }
  ];
  metadata: {
    name: string;
    description: string;
    image: string;
  };
  balance: string;
}

export interface NFTProps {
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
