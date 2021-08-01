import { createGlobalStyle } from 'styled-components';
import Roboto from './Roboto-Medium.ttf';
import SuezOne from './SuezOne-Regular.ttf';

export const GlobalFonts = createGlobalStyle`

  @font-face {
    font-family: 'Roboto';
    src: local('Roboto'), local('Roboto'),
    url(${Roboto});
  }

  @font-face {
    font-family: 'Suez One';
    src: local('Suez One'), local('SuezOne'),
    url(${SuezOne});
  }

`;