import React from 'react';
import { StyledLink } from './styles/Header.style';
import { StyledButton } from './styles/Button.style';

const Button = (props)=> {
  return(
    <StyledLink to="/Best-4-Buy/shop/">
      <StyledButton>
        {props.children}
      </StyledButton>
    </StyledLink>
  );
}

export default Button;