import React from 'react';
import { StyledHome, StyledContent, StyledVector } from './styles/Home.style';
import Button from './Button';
import Vector from '../assets/Vector-1.svg';

const Home = ({ prod })=> {
  return(
    <StyledHome>
      <StyledContent>
        <h1>This is the new {(prod)? prod: 'Item'}</h1>
        <p>It will take your entertainment to another level</p>
        <Button>Buy Now</Button>
      </StyledContent>
      <StyledVector src={Vector} />
    </StyledHome>
  );
}

export default Home;