import { createGlobalStyle } from 'styled-components';
import Roboto from '../../assets/fonts/Roboto-Medium.ttf';
import SuezOne from '../../assets/fonts/SuezOne-Regular.ttf';

export const Global = createGlobalStyle`

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'),
    url(${Roboto}) format('ttf');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Suez One';
    src: local('Suez One'),
    url(${SuezOne}) format('ttf');
    font-weight: 400;
    font-style: normal;
  }

  body {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;