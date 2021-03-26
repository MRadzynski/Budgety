import React from 'react';

import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/homepage/homepage.component';
import CustomButton from './components/custom-button/custom-button.component';

import GlobalStyle from './GlobalStyles';

const App = () => (
  <div>
    <GlobalStyle />
    <Navbar />
    {/* <HomePage /> */}
    <CustomButton>Add Expense</CustomButton>
  </div>
);

export default App;
