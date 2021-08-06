import React from 'react';
import SVG from '../assets/empty-cart.svg';

import { StyledShop, CartContainer, Total } from './styles/Shop.style';
import { CartImg } from './styles/Home.style';
import { AddCartBtn, StyledButton } from './styles/Button.style';
import { StyledLink } from './styles/Header.style';

import CartCard from './CartCard';

const Cart = ({ cart, setCart })=> {
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
          {cart.map(item=> <CartCard
            key={item.id}
            item={item}
            setCart={setCart}
            cart={cart}
            />)}
        </CartContainer>
        <Total>
          <h3>Total:</h3>
          <p>
            {
              Math.floor(
                cart.reduce(
                  (value, item)=> (item.price * item.quantity) + value, 0
                ) * 100
              ) / 100
            }
          </p>
        </Total>
        <AddCartBtn width="30%" marginB>Checkout</AddCartBtn>
      </StyledShop>
    );
  }

  return (cart.length < 1)? getEmptyContent(): getCartContent();
}

export default Cart;