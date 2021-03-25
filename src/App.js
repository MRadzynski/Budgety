import React from 'react';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import CustomButton from './components/custom-button/custom-button.component';

import './App.css';

const App = () => (
  <div>
    <Header />
    {/* <HomePage /> */}
    <CustomButton>Add Expense</CustomButton>
  </div>
);

export default App;
