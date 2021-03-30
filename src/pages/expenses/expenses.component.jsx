import React from 'react';

import Navbar from '../../components/navbar/navbar.component';
import ExpensesDetails from '../../components/expenses-details/expenses-details.component';
import {
  ExpensesPageContainer,
  ExpensesTitle,
  ChartContainer,
  ChartPrice,
} from './expenses.styles';

const ExpensesPage = () => (
  <ExpensesPageContainer>
    <ExpensesTitle>Expenses</ExpensesTitle>
    <ChartContainer>
      <ChartPrice>$5.712.345,34</ChartPrice>
    </ChartContainer>
    <ExpensesDetails />
    <Navbar />
  </ExpensesPageContainer>
);

export default ExpensesPage;
