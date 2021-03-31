import React from 'react';

import { useLocation } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar.component';
import ExpensesDetails from '../../components/expenses-details/expenses-details.component';

import {
  ExpensesPageContainer,
  ExpensesTitle,
  ChartContainer,
  ChartPrice,
} from './expenses.styles';

const ExpensesPage = () => {
  let location = useLocation();
  return (
    <ExpensesPageContainer>
      <ExpensesTitle>
        {location.pathname === '/expenses' ? 'Expenses' : 'Savings'}
      </ExpensesTitle>
      <ChartContainer>
        <ChartPrice>$5.712.345,34</ChartPrice>
      </ChartContainer>
      <ExpensesDetails currentPath={location.pathname} />
      {/* <Navbar /> */}
    </ExpensesPageContainer>
  );
};

export default ExpensesPage;
