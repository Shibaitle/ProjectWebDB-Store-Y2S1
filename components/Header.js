import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import {useContext, useState} from "react";
import {CartContext} from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import ShopLogo from "@/components/icons/ShopLogo";
import CartIcon from "@/components/icons/CartIcon";


const StyledHeader = styled.header`
  
`;

const Logo = styled(Link)`
  color:#fff;
  text-decoration:none;
  position: relative;
  z-index: 3;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0;
`;
const StyledNav = styled.nav`
  ${props => props.mobileNavActive ? `
    display: block;
  ` : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;
/*
background-color: #222;
*/

const NavLink = styled(Link)`
  display: block;
  color: black;
  text-decoration:none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding:0;
  }
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border:0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  const {cartProducts} = useContext(CartContext);
  const [mobileNavActive,setMobileNavActive] = useState(false);
  return (
    <StyledHeader>
        <Wrapper>
          <Logo href={'/'}><ShopLogo /></Logo>
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={'/products'}>Games</NavLink>
            <NavLink href={'/categories'}>Platform</NavLink>
            <NavLink href={'/account'}>Account</NavLink>
            <NavLink href={'/cart'}><CartIcon/>({cartProducts.length})</NavLink>
            
          </StyledNav>
          <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
    </StyledHeader>
  );
}