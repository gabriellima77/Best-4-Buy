import React from 'react';
import uniqid from 'uniqid';
import { ItemsBox, Item, Rating} from './styles/Items.style';
import { BsStar, BsStarHalf, BsStarFill} from 'react-icons/bs';
import Input from './Input';

const ItemCard = ({ data, setCart, cart })=> {

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

  const getItemCard = (prod)=> {
    return (
      <Item key={prod.id}>
        <img alt={prod.title} src={prod.image} />
        <p>{prod.title}</p>
        <RatingBox
          rating={prod.peopleRated}
          n={prod.rate}
        />
        <Input prod={prod} setCart={setCart} cart={cart}/>
      </Item>
    );
  }

  return(
    <ItemsBox>
      {
        data
          ? data.map((prod)=> (getItemCard(prod, setCart)))
          : null
      }
    </ItemsBox>
  );
}

export default ItemCard;