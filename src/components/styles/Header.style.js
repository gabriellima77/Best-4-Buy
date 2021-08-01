import styled from 'styled-components';
import img from '../../assets/Logo.svg';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Logo = styled.div`
  width: 21px;
  height: 42px;
  background: url(${img});
  background-size: cover;
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
  color: #EAEAEA;
  font-size: 20px;
  text-decoration: none;
  margin-left: ${(props)=> props.margin};

  svg {
    padding-top: 20%;
  }
`;
