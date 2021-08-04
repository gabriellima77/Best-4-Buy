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
