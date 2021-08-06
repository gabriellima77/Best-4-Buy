import styled, { keyframes } from 'styled-components';

export const SeachContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #EAEAEA;
  min-height: calc(100vh - 50px);
  width: 100%;
`;

const coverAnimation = keyframes`
  from {
    height: 0px;
  } to {
    height: 100%;
  }
`;

export const Cover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 0;
  position:absolute;
  top: 0;
  animation: ${coverAnimation} .5s ease-in-out forwards;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
`;

const inputAnimation = keyframes`
  from {
    width: 0;
  } to {
    width: 100%;
  }
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #EAEAEA;
  color: #EAEAEA;
  background: transparent;
  height: 40px;
  font-size: 20px;
  margin-right: 10px;
  animation: ${inputAnimation} .5s linear forwards;

  &::placeholder {
    color: #EAEAEA;
  }
`;
