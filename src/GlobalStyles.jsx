import { createGlobalStyle } from 'styled-components';

let vh = window.innerHeight * 0.01;

const GlobalStyle = createGlobalStyle`
:root {
  --primary-color: #4361EE;
  --white-shade: #F5F5F5;
  --black-shade: #353535;
  --errorMessage: #ed4337;
  --vh: ${vh}px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  height: calc(var(--vh, 1vh) *100);
}

body{
  background-color: var(--primary-color);
  height:100%;
}
`;

export default GlobalStyle;
