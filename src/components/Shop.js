import React from 'react';
import uniqid from 'uniqid';
import { StyledShop, Categories } from './styles/Shop.style';
import { ItemsBox, Item, Rating } from './styles/Items.style';
import { BsStar, BsStarHalf, BsStarFill} from 'react-icons/bs';
import {
  GiBigDiamondRing, GiToaster,
  GiTShirt, GiSteeringWheel, GiAmpleDress,
  GiBabyBottle, GiSlicedBread, GiSmartphone,
} from 'react-icons/gi';

const Shop = ()=> {
  return(
    <StyledShop>
      <Categories>
        <GiBigDiamondRing title="accessories" />
        <GiToaster title="appliances" />
        <GiSteeringWheel title="automotive" />
        <GiBabyBottle title="babies" />
        <GiTShirt title="fashionmen" />
        <GiAmpleDress title="fashionwomen" />
        <GiSmartphone title="gadgets" />
        <GiSlicedBread title="groceries" />
      </Categories>
      <ItemsBox>
        <Item>
          <img />
          <p>Nome</p>
          <RatingBox n={4.7} />
          <p>$ 125.99</p>
        </Item>
        <Item>
          <img />
          <p>Nome</p>
          <RatingBox n={4.2} />
          <p>$ 125.99</p>
        </Item>
        <Item>
          <img />
          <p>Nome</p>
          <RatingBox n={2.2} />
          <p>$ 125.99</p>
        </Item>
        <Item>
          <img />
          <p>Nome</p>
          <RatingBox n={3.5} />
          <p>$ 125.99</p>
        </Item>
      </ItemsBox>
    </StyledShop>
  )
}

const RatingBox = ({rating, n})=> {
  const getStars = ()=> {
    const nFill = Math.floor(n);
    const nHalf = (n - nFill) >= 0.5? 1: 0;
    const empty = 5 - (nFill + nHalf);
    const FillStars = [...new Array(nFill)].map(( )=> <BsStarFill key={uniqid()} />);
    const halfStars = [...new Array(nHalf)].map(( )=> <BsStarHalf key={uniqid()} />);
    const Stars = [...new Array(empty)].map(( )=> <BsStar key={uniqid()} />);

    return [...FillStars, ...halfStars, ...Stars];
  }

  return(
    <Rating>
      {getStars()}
      <p>{rating? rating: 200}</p>
    </Rating>
  );
}

export default Shop;