import React, { useState } from 'react';
import { useRouteMatch } from 'react-router';
import { StyledButton } from './styles/Button.style';
import { StyledLink } from './styles/Header.style';
import { Cover, Input, InputContainer,SeachContainer } from './styles/Search.style';

const Search= ()=> {
  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState('');
  const { url } = useRouteMatch();

  const changeValue = (e)=> setValue(e.target.value);

  const getInput = ()=> {
    return (
      <InputContainer>
        <Input onChange={changeValue} placeholder="Search" value={value}/>
        <StyledLink to={`${url}${(!value)? '': value}`}>
          <StyledButton small>Search</StyledButton>
        </StyledLink>
      </InputContainer>
    );
}

  const animationEvent = ()=> setShowInput(true);

  return(
    <SeachContainer>
      <Cover onAnimationEnd={animationEvent}>
        {(showInput)? getInput(): null}
      </Cover>
    </SeachContainer>
  )
}

export default Search;