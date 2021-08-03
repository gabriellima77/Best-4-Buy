import styled, { keyframes } from 'styled-components';

const Boucer = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100px);
  }
`;

export const Loader = styled.div`
  align-self: center;
  margin: auto 0;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  width: 100px;
  height: 100px;

  div {
    width: 20px;
    height: 20px;
    background: #000000;
    border-radius: 50%;
    animation: ${Boucer} 0.5s cubic-bezier(0.19, 0.57, 0.3, 0.98) infinite alternate;
  }

  div:nth-child(2) {
    animation-delay: 0.1s;
    opacity: 0.8;
  }

  div:nth-child(3) {
    animation-delay: 0.2s;
    opacity: 0.6;
  }

  div:nth-child(4) {
    animation-delay: 0.3s;
    opacity: 0.4;
  }
`;
