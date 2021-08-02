import styled from 'styled-components';

export const ItemsBox = styled.div`
  box-sizing: border-box;
  padding: 20px 7%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: white;

  img {
    height: 250px;
    background: #555;
  }

  p {
    box-sizing: border-box;
    padding-left: 10%;
  }

`;

export const Rating = styled.div`
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
