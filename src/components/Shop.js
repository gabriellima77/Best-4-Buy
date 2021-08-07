import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

import useLoading from './hooks/useLoading';
import { StyledShop, Categories } from './styles/Shop.style';
import { StyledLink } from './styles/Header.style';
import ItemCard from './ItemCard';

import {
  GiBigDiamondRing,
  GiTShirt, GiAmpleDress,
  GiSmartphone,
} from 'react-icons/gi';
  
const Shop = ({ setCart, cart, isSearch })=> {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const { isLoading, setIsLoading, getLoading } = useLoading();
  
  const getRandomRate = ()=> ((Math.floor(Math.random() * 400) + 100)  / 100);
  const getPeopleRated = (max)=> (Math.floor(Math.random() * max));

  const fetchData = async ()=> {
    setIsLoading(true);
    try {
      const response = (id && !isSearch)
      ? await fetch(`https://fakestoreapi.com/products/category/${id}`, {mode: 'cors'})
      : await fetch('https://fakestoreapi.com/products', {mode: 'cors'})
      let json = await response.json();
      json.forEach(item=> {
        item.rate = getRandomRate();
        item.peopleRated = getPeopleRated(10000);
      });
  
      // Search Filter
      if(isSearch) json = json.filter((item)=> 
        (item.title.toUpperCase().includes(id.toUpperCase()))
      );
  
      setData(json);
      setIsLoading(false);
    } catch(error) {
      console.log(id);
      setIsLoading(false);
      console.error(error);
    }

  }

  useEffect(()=> {
    fetchData();
  }, [ id ]);

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
  return (
    <Categories>
      <StyledLink color="black" to="/Best-4-Buy/shop/jewelery/">
        <GiBigDiamondRing title="jewelery" />
      </StyledLink>
      <StyledLink color="black" to="/Best-4-Buy/shop/men's clothing/">
        <GiTShirt title="men's clothing" />
      </StyledLink>
      <StyledLink color="black" to="/Best-4-Buy/shop/women's clothing/">
        <GiAmpleDress title="women's clothing" />
      </StyledLink>
      <StyledLink color="black" to="/Best-4-Buy/shop/electronics/">
        <GiSmartphone title="electronics" />
      </StyledLink>
    </Categories>
  );
}

export default Shop;