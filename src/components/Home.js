import React from 'react';
import { StyledHome, StyledContent } from './styles/Home.style';
import Button from './Button';

const Home = ({ prod })=> {
  return(
    <StyledHome>
      <StyledContent>
        <h1>This is the new {(prod)? prod: 'Item'}</h1>
        <p>It will take your entertainment to another level</p>
        <Button>Buy Now</Button>
      </StyledContent>
    </StyledHome>
  );
}

export default Home;