import React, { useState, useEffect} from 'react';
import { useRouteMatch, useParams } from 'react-router-dom';

import useLoading from './hooks/useLoading';
import { StyledShop, Categories } from './styles/Shop.style';
import { StyledLink } from './styles/Header.style';
import ItemCard from './ItemCard';

import {
  GiBigDiamondRing,
  GiTShirt, GiAmpleDress,
  GiSmartphone,
} from 'react-icons/gi';
  
const Shop = ({ setCart, cart })=> {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const { isLoading, setIsLoading, getLoading } = useLoading();
  
  const getRandomRate = ()=> ((Math.floor(Math.random() * 400) + 100)  / 100);
  const getPeopleRated = (max)=> (Math.floor(Math.random() * max));

  useEffect(()=> {
    fetchData();
  }, [ id ]);

  const fetchData = async ()=> {
    setIsLoading(true);
    const response = (id)
      ? await fetch(`https://fakestoreapi.com/products/category/${id}`)
      : await fetch('https://fakestoreapi.com/products')
    const json = await response.json();
    json.forEach(item=> {
      item.rate = getRandomRate();
      item.peopleRated = getPeopleRated(10000);
    });
    setData(json);
    setIsLoading(false);
  }

  return(
    <StyledShop>
      {getCategories()}
      {(isLoading)
        ?getLoading()
        : <ItemCard data={data} setCart={setCart} cart={cart}/>
      }
    </StyledShop>
  )
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

export default Shop;