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

  a{
    margin-top: 2vh;
    align-self: center;
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
  margin: 5% auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px 5%;
`;

export const CartItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: coral;
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
  height: 100%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;

  h3 {
    margin: 0;
    height: 20px;
    font-size: 16px;
    overflow: hidden;
  }

  p {
    margin: 0 10px;

  }
  
  span {
    width: calc(100% - 20px)
    position: relative;
    top: 5px;
    display: flex;
  }
`; 