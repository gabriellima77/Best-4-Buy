import React, { useState } from 'react';
import SVG from '../assets/empty-cart.svg';

import { StyledShop, CartContainer, CartItem, CartContentBox, ImgContainer } from './styles/Shop.style';
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

  const getCartContent = ()=> {
    return (
      <StyledShop>
        <CartContainer>
          {cart.map(item=> cartCard(item))}
        </CartContainer>
      </StyledShop>
    );
  }

  return (cart.length < 1)? getEmptyContent(): getCartContent();
}

const cartCard = (item)=> {
  const [value, setValue] = useState('');

  return (
    <CartItem>
      <ImgContainer>
        <img alt={item.title} src={item.img} />
      </ImgContainer>
      <CartContentBox>
        <span>
          <h3>{item.title}</h3>
          <p>${item.price}</p>
        </span>
        
      </CartContentBox>
    </CartItem>
  )

}

export default Cart;