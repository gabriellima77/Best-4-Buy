import React from 'react';
import SVG from '../assets/empty-cart.svg';

import { StyledShop } from './styles/Shop.style';
import { CartImg } from './styles/Home.style';
import { StyledButton } from './styles/Button.style';
import { StyledLink } from './styles/Header.style';

const Cart = ({ cart, setCart})=> {
  const getEmptyContent = ()=> (
    <StyledShop>
      <CartImg alt="A man with a empty cart" src={SVG} />
        <h2>Your cart is empty!</h2>
      <StyledLink to="/shop">
        <StyledButton small>Go Shopping</StyledButton>
      </StyledLink>
    </StyledShop>
  );

  return (cart.length < 1)? getEmptyContent(): null;
}

export default Cart;