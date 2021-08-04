import React from 'react';
import img from '../assets/Logo.svg';
import { StyledHeader, Logo, Nav, StyledLink } from './styles/Header.style';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';

const Header = ({ cart })=> {
  return (
    <StyledHeader>
      <StyledLink margin="7%" to="/">
        <Logo alt="logo" src={img}/>
      </StyledLink>
      
      <Nav>
        <StyledLink to="/shop">Shop</StyledLink>
        <StyledLink to="/search">
          <AiOutlineSearch />
        </StyledLink>
        <StyledLink to="/cart">
          <FiShoppingCart />
          {(cart.length > 0)? <div>{cart.length}</div> : null}
        </StyledLink>
      </Nav>
    </StyledHeader>
  );
}

export default Header;