import React, { useState, useEffect} from 'react';
import { useRouteMatch, useParams } from 'react-router-dom';
import uniqid from 'uniqid';

import useLoading from './hooks/useLoading';
import { StyledShop, Categories } from './styles/Shop.style';
import { ItemsBox, Item, Rating, QuantityBox } from './styles/Items.style';
import { StyledLink } from './styles/Header.style';
import Input from './Input';

import { BsStar, BsStarHalf, BsStarFill} from 'react-icons/bs';
import {
  GiBigDiamondRing,
  GiTShirt, GiAmpleDress,
  GiSmartphone,
} from 'react-icons/gi';
import { AddCartBtn } from './styles/Button.style';
  
const Shop = ()=> {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const { isLoading, setIsLoading, getLoading } = useLoading();

  useEffect(()=> {
    fetchData();
  }, [ id ]);

  const fetchData = async ()=> {
    setIsLoading(true);
    const response = (id)
      ? await fetch(`https://fakestoreapi.com/products/category/${id}`)
      : await fetch('https://fakestoreapi.com/products')
    const json = await response.json();
    setData(json);
    setIsLoading(false);
  }

  return(
    <StyledShop>
      {getCategories()}
      {(isLoading)
        ?getLoading()
        : <ItemsBox>
          {
            data
              ? data.map((prod)=> (getItemCard(prod)))
              : null
          }
        </ItemsBox>
      }
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
      <p>{rating}</p>
    </Rating>
  );
}

const getCategories = ()=> {
  let { url } = useRouteMatch();
  url = (url !== '/shop')? '/shop': url;

  return (
    <Categories>
      <StyledLink color="black" to={`${url}/jewelery`}>
        <GiBigDiamondRing title="jewelery" />
      </StyledLink>
      <StyledLink color="black" to={`${url}/men's clothing`}>
        <GiTShirt title="men's clothing" />
      </StyledLink>
      <StyledLink color="black" to={`${url}/women's clothing`}>
        <GiAmpleDress title="women's clothing" />
      </StyledLink>
      <StyledLink color="black" to={`${url}/electronics`}>
        <GiSmartphone title="electronics" />
      </StyledLink>
    </Categories>
  );
}

const getItemCard = (prod)=> {
  const getRandomRate = ()=> ((Math.floor(Math.random() * 400) + 100)  / 100);
  const getPeopleRated = (max)=> (Math.floor(Math.random() * max));

  return (
    <Item key={prod.id}>
      <img alt={prod.title} src={prod.image} />
      <p>{prod.title}</p>
      <RatingBox
        rating={getPeopleRated(10000)}
        n={getRandomRate()}
      />
      <QuantityBox>
        <p>${prod.price}</p>
        <Input />
      </QuantityBox>
      <AddCartBtn>Add To Cart</AddCartBtn>
    </Item>
  );
}

export default Shop;