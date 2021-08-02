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
