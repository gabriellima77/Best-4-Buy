import styled from 'styled-components';

export const StyledHome = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh - 50px);
  background: #EFEFEF;
  overflow: hidden;
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
    width: fit-content;
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 670px) {
    width: 100%;
    font-size: 18px;
    h1,
    p {
      text-shadow: 1px 1px 1px #EAEAEA;
    }
    a {
      align-self: flex-start;
    }
  }
`;

export const StyledVector = styled.img`
  height: 100%;
  position: absolute;
  margin: 0;
  bottom: 0;
  right: -2px;
  z-index: 0;
`;

export const StyledImg = styled.img`
  width: 40%;
  height: 60%;
  position: absolute;
  top: 10%;
  right: 12%;

  @media (max-width: 670px) {
    width: 60%;
    top: 0;
    right: 18%;
  }
`;

export const CartImg = styled.img`
  align-self: center;
  margin-top: 2vh;
  width: 30%;
  height: 50%;

  @media (max-width: 768px) {
    width: 50%;
    margin-top: 10vh;
  }

  @media (max-width: 550px) {
    margin-top: 20vh;
  }
`;