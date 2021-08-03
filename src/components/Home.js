import React from 'react';
import { 
  StyledHome, StyledContent,
  StyledVector, StyledImg
} from './styles/Home.style';
import Button from './Button';
import Vector from '../assets/Vector-1.svg';
import SVG from '../assets/shopping.svg';

const Home = ()=> {
  return(
    <StyledHome>
      <StyledContent>
        <h1>Best for Buy</h1>
        <p>We will take shopping online to another level!</p>
        <Button>Shop Now</Button>
      </StyledContent>
      <StyledVector src={Vector} />
      <StyledImg alt="shopping" src={SVG} />
    </StyledHome>
  );
}

export default Home;