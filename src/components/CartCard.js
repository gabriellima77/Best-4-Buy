import React, { useState }  from 'react';
import { QuantityBox } from './styles/Items.style';
import { CartContentBox, CartItem, ImgContainer } from './styles/Shop.style';

const CartCard = ({ item, setCart, cart })=> {
  const [value, setValue] = useState(+item.quantity);

  const increase = ()=> {
    setValue((prev)=> +prev + 1);
    setCart((prev)=> prev.map((prod)=> {
      if(prod.id === item.id) {
        const newItem = {
          ...prod
        };
        newItem.quantity += 1;
        return newItem;
      }
      return prod;
    }));
  }

  const decrease = ()=> {
    if(value - 1 <= 0){
      console.log(cart);
      const aux = [...cart].filter((prod)=> (prod.id !== item.id));
      console.log(aux);
      setCart([...aux]);
    } else {
      setValue((prev)=> (prev >= 1)? +prev - 1: prev);
      setCart((prev)=> prev.map((prod)=> {
        if(prod.id === item.id) {
          const newItem = {
            ...prod
          };
          newItem.quantity -= 1;
          return newItem;
        }
        return prod;
      }));
    }
  }

  const changeValue = (e)=> {
    if(!e.target.value.match(/\D/)) setValue(e.target.value);
  }

  return (
    <CartItem>
      <ImgContainer>
        <img alt={item.title} src={item.img} />
      </ImgContainer>
      <CartContentBox>
        <span>
          <h3>{item.title}</h3>
        </span>
        <QuantityBox>
          <p>${item.price}</p>
          <div>
            <button onClick={decrease}>-</button>
            <input onChange={changeValue} type="text" value={value} />
            <button onClick={increase}>+</button>
          </div>
        </QuantityBox>
      </CartContentBox>
    </CartItem>
  )

}

export default CartCard;