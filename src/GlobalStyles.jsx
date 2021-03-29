import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --primary-color: #4361EE;
  --white-shade: #F5F5F5;
  --black-shade: #353535;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body{
  background-color: var(--primary-color);
}


`;

export default GlobalStyle;
