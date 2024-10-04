const ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;

export async function fetchNFTs(ownerAddress: string) {
  const response = await fetch(
    `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API_KEY}/getNFTs/?owner=${ownerAddress}`
  );
  const data = await response.json();
  return data.ownedNfts;
}

export async function fetchNFTDetails(
  contractAddress: string,
  tokenId: string
) {
  const response = await fetch(
    `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}/getNFTMetadata?contractAddress=${contractAddress}&tokenId=${tokenId}`
  );
  const data = await response.json();
  return data;
}
