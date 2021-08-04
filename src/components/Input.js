import React, { useState } from 'react';
import { QuantityBox, InputBox } from './styles/Items.style';
import { AddCartBtn } from './styles/Button.style';

const Input = ({ prod, setCart, cart })=> {
  const [value, setValue] = useState(1);
  const increase = ()=> setValue((prev)=> +prev + 1);
  const decrease = ()=> setValue((prev)=> (prev >= 1)? +prev - 1: prev);

  const addToCart = ()=> {
    const aux = [...cart];
    if(value > 0){
      const hasItem = aux.find((item)=> (item.id === prod.id));

      if(hasItem) {
        const index = aux.indexOf(hasItem);
        aux[index].quantity += +value;
      } else aux.push({
        id: prod.id,
        quantity: +value,
        price: prod.price,
        title: prod.title,
        img: prod.image
      });
      console.log(aux);

      setCart([...aux]);
    }
    
    setValue(1);
  }

  const changeValue = (e)=> {
    if(!e.target.value.match(/\D/)) setValue(e.target.value);
  }

  return (
    <InputBox>
      <QuantityBox>
        <p>${prod.price}</p>
      
        <div>
          <button onClick={decrease}>-</button>
          <input onChange={changeValue} type="text" value={value} />
          <button onClick={increase}>+</button>
        </div>
      </QuantityBox>
      <AddCartBtn onClick={addToCart}>
        Add To Cart
      </AddCartBtn>
    </InputBox>
  )
}

export default Input;