import styled from 'styled-components';

export const StyledHome = styled.section`
  width: 100%;
  height: calc(100vh - 50px);
  background: #FBFBFB;
`;

export const StyledContent = styled.div`
  font-family: 'Suez One', serif;
  padding-left: 7%;
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgba(0, 0, 0, 0.8);
  
  h1 {
    margin: 0;
  }

  a {
    padding: 0;
    margin-left: 30%;
    width: fit-content;
  }

  button {
    cursor: pointer;
  }
`;