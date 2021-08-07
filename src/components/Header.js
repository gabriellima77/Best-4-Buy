import React from 'react';
import img from '../assets/Logo.svg';
import { StyledHeader, Logo, Nav, StyledLink } from './styles/Header.style';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';

const Header = ({ cart })=> {
  return (
    <StyledHeader>
      <StyledLink margin="7%" to="/Best-4-Buy/">
        <Logo alt="logo" src={img}/>
      </StyledLink>
      
      <Nav>
        <StyledLink to="/Best-4-Buy/shop/" >Shop</StyledLink>
        <StyledLink to="/Best-4-Buy/search/">
          <AiOutlineSearch />
        </StyledLink>
        <StyledLink to="/Best-4-Buy/cart">
          <FiShoppingCart />
          {(cart.length > 0)? <div>{cart.length}</div> : null}
        </StyledLink>
      </Nav>
    </StyledHeader>
  );
}

export default Header;