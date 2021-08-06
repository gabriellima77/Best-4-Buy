import styled from 'styled-components';

export const StyledShop = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(100vh - 50px);
  background: #EFEFEF;

  h2 {
    margin-top: 2vh;
    align-self: center;
    font-family: 'Suez One', serif;
  }

`;

export const Categories = styled.div`
  box-sizing: border-box;
  padding: 0 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  background-color: white;
`;

export const CartContainer = styled.div`
  width: fit-content;
  margin: 5% auto 2% auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px 5%;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  background: white;
`;

export const ImgContainer = styled.div`
  box-sizing: border-box;
  padding: 2px;
  background: white;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const CartContentBox = styled.div`
  width: 30vw;
  height: 100%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    height: 20px;
    font-size: 16px;
    overflow: hidden;
  }
  
  span {
    width: 100%;
    position: relative;
    top: 5px;
    display: flex;
  }

  div {
    justify-content: space-around;
  }
`;

export const Total = styled.div`
  align-self: center;
  justify-content: flex-end;
  align-items: center;
  width: 30vw;
  height: 50px;
  border-top: 1px solid black;
  display: flex;
  align-items: flex-end;

  p {
    margin-right: 10%;
    font-size: 20px;
    font-weight: bold;
  }

  h3 {
    margin-left: 10%;
    margin-right: auto;
    font-size: 20px;
  }
`;