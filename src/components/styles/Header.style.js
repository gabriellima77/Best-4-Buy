import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Logo = styled.img`
  width: 21px;
  height: 42px;
`;

export const Nav = styled.nav`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 7%;
`;

export const StyledLink = styled(Link)`
  position: relative;
  color: ${(props)=>(props.color)? props.color: '#EAEAEA'};
  font-size: 20px;
  text-decoration: none;
  margin-left: ${(props)=> props.margin};

  svg {
    padding-top: 20%;
  }

  div {
    top: -25%;
    right: -50%;
    position: absolute;
    display: grid;
    place-items: center;
    overflow: hidden;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #EAEAEA;
    color: rgba(0, 0, 0, 0.8);
    font-size: 10px;
  }
`;
