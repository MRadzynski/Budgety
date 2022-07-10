import { createGlobalStyle } from 'styled-components';

const vh = window.innerHeight * 0.01;

const orientation =
  window.innerHeight > window.innerWidth ? 'portrait' : 'landscape';

window.addEventListener('orientationchange', () => {
  window.location.reload();
});

const GlobalStyle = createGlobalStyle`
:root {
  --black-shade: #353535;
  --errorMessage: #ed4337;
  --light-gray: #e0e0e0;
  --primary-color: #4361EE;
  --secondary-color: #33cfff;
  --successMessage: #4bb543;
  --vh: ${vh}px;
  --white-shade: #F5F5F5;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
  height: calc(var(--vh, 1vh) *100);
}

body{
  background: url(/assets/background-${orientation}.png), var(--primary-color);
  background-size: cover;
  height:100%;
}
`;

export default GlobalStyle;

// ${'' /* background: url('/assets/background-image2.png'), var(--primary-color); */}
// ${'' /* background-position: 50% 30%; */}
