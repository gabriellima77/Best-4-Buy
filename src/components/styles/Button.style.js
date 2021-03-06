import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 10px 40px;
  background-color: rgba(0, 0, 0, 0.8);
  border: none;
  font-size: 24px;
  font-family: 'Suez One', serif;
  color: #EAEAEA;
  width: ${(props)=> (props.small)? 'fit-content': '100%'};

  @media (max-width: 550px) {
    font-size: ${(props)=> (props.small)? '18px': '24px'};
    padding: 5px 20px;
  }
`;

export const AddCartBtn = styled.button`
  position: relative;
  box-sizing: border-box;
  box-shadow: 0 5px 0 rgba(0, 0, 0, 0.9);
  margin: 5px auto;
  padding: 10px 0px;
  width: ${(props)=> (props.width)? props.width: '80%'};
  background-color: rgba(0, 0, 0, 0.8);
  border: none;
  font-size: 20px;
  font-family: 'Suez One', serif;
  color: #EAEAEA;
  transition: top .5s linear;
  margin-bottom: ${(props)=> (props.marginB)? '2%': ''};
  &:active {
    top: 5px;
    box-shadow: none;
  }
`;