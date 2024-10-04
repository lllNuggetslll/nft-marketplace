const nfts = [
  {
    id: "1",
    title: "CryptoPunk #1",
    imageUrl: "https://via.placeholder.com/200",
    owner: "0x1234...abcd",
  },
  {
    id: "2",
    title: "Bored Ape #2",
    imageUrl: "https://via.placeholder.com/200",
    owner: "0x5678...efgh",
  },
  {
    id: "3",
    title: "Meebit #3",
    imageUrl: "https://via.placeholder.com/200",
    owner: "0x9abc...defg",
  },
];

export function getMockNFTs() {
  return nfts;
}

export function getMockNFTById(id: string) {
  return nfts.find((nft) => nft.id === id);
}
