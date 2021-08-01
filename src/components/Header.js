import React from 'react';
import { StyledHeader, Logo, Nav, StyledLink } from './styles/Header.style';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';

const Header = ()=> {
  return (
    <StyledHeader>
      <StyledLink margin="7%" to="/">
        <Logo />
      </StyledLink>
      
      <Nav>
        <StyledLink to="/shop">Shop</StyledLink>
        <StyledLink to="/search">
          <AiOutlineSearch />
        </StyledLink>
        <StyledLink to="/cart">
          <FiShoppingCart />
        </StyledLink>
      </Nav>
    </StyledHeader>
  );
}

export default Header;