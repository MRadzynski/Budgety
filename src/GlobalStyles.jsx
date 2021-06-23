import { createGlobalStyle } from 'styled-components';

const vh = window.innerHeight * 0.01;

const orientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';

window.addEventListener('orientationchange', () => {
  window.location.reload();
});

const GlobalStyle = createGlobalStyle`
:root {
  --primary-color: #4361EE;
  --secondary-color: #33cfff;
  --white-shade: #F5F5F5;
  --black-shade: #353535;
  --light-gray: #e0e0e0;
  --successMessage: #4bb543;
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
  background: url(/assets/background-${orientation}.png), var(--primary-color);
  background-size: cover;
}
`;

export default GlobalStyle;

// ${'' /* background: url('/assets/background-image2.png'), var(--primary-color); */}
// ${'' /* background-position: 50% 30%; */}