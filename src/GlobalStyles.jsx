import { createGlobalStyle } from 'styled-components';

let vh = window.innerHeight * 0.01;

window.addEventListener('orientationchange', () => {
  vh = window.innerHeight * 0.01;
  window.location.reload();
});

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
  height:100%;
  background: url('/assets/background-image2.png'), var(--primary-color);
  ${'' /* background-position: center; */}
  background-size: cover;
}
`;

export default GlobalStyle;
