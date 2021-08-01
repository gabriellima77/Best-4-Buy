import styled from 'styled-components';

export const StyledHome = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh - 50px);
  background: #FBFBFB;
`;

export const StyledContent = styled.div`
  position: absolute;
  font-family: 'Suez One', serif;
  padding-left: 7%;
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgba(0, 0, 0, 0.8);
  z-index: 1;

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

export const StyledVector = styled.img`
  height: 100%;
  position: absolute;
  margin: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
`;