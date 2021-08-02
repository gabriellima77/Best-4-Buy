import React, { useState, useEffect} from 'react';
import uniqid from 'uniqid';
import { StyledShop, Categories } from './styles/Shop.style';
import { ItemsBox, Item, Rating } from './styles/Items.style';
import { BsStar, BsStarHalf, BsStarFill} from 'react-icons/bs';
import {
  GiBigDiamondRing,
  GiTShirt, GiAmpleDress,
  GiSmartphone,
} from 'react-icons/gi';
  
const Shop = ({match})=> {
  const [data, setData] = useState([]);

  useEffect(()=> {
    fetchData();
  }, []);

  const fetchData = async (category)=> {
    const response = (category)
      ? await fetch(`https://fakestoreapi.com/products/category/${category}`)
      : await fetch('https://fakestoreapi.com/products')
    const json = await response.json();
    console.log(json);
    setData(json);
  }

  const getRandomRate = ()=> (Math.floor(Math.random() * 500) / 100);
  const getPeopleRated = (max)=> (Math.floor(Math.random() * max));

  return(
    <StyledShop>
      {getCategories()}
      <ItemsBox>
        {
          data
            ? data.map((prod)=> (
              <Item key={prod.id}>
                <img alt={prod.title} src={prod.image} />
                <p>{prod.title}</p>
                <RatingBox
                  rating={getPeopleRated()}
                  n={getRandomRate(10000)}
                />
                <p>$ {prod.price}</p>
              </Item>
            ))
            : null
        }
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

const getCategories = ()=> (
  <Categories>
    <GiBigDiamondRing title="jewelery" />
    <GiTShirt title="men's clothing" />
    <GiAmpleDress title="women's clothing" />
    <GiSmartphone title="electronics" />
  </Categories>
);

export default Shop;