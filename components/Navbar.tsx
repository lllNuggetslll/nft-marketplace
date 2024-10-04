"use client";

import WalletButton from "./WalletButton";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <Logo>NFT Marketplace</Logo>
      <WalletButton />
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: #fff;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

export default Navbar;
