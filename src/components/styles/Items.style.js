import styled from 'styled-components';

export const ItemsBox = styled.div`
  box-sizing: border-box;
  padding: 20px 7%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: white;
  border-radius: 4px;

  img {
    align-self: center;
    width: 90%;
    height: 250px;
    padding: 20px 0;
    transition: transform ease .5s;
  }

  &:hover img {
    transform: scale(1.1);
  }

  p {
    box-sizing: border-box;
    padding-left: 10%;
  }

`;

export const Rating = styled.div`
  margin-top: auto;
  box-sizing: border-box;
  padding-left: 10%;
  width: 70%;
  display: flex;
  align-items: center;
  color: orange;

  p {
    padding: 5px;
    margin: 0;
    color: black;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const QuantityBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  div {
    margin-left: auto;
    margin-right: 10%;
    display: flex;
    align-items: center;
  }

  input {
    width: 35px;
    text-align: center;
  }

  button {
    position: relative;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.9);
    border: none;
    color: #EAEAEA;
    margin-right: 5px;
    transition: top .5s linear;
  }

  button:active {
    top: 2px;
    box-shadow: none;
  }

  button:nth-child(3) {
    margin-right: 0;
    margin-left: 5px;
  }
`;
