import React from 'react';
import { useLocation } from 'react-router-dom';

import CATEGORIES_DATA from '../../categories.data';

import ExpensesDetails from '../../components/expenses-details/expenses-details.component';

import {
  ExpensesPageContainer,
  ExpensesTitle,
  ChartContainer,
  ChartPrice,
} from './expenses.styles';

const ExpensesPage = () => {
  let location = useLocation();
  let overallAmount = Object.entries(CATEGORIES_DATA).reduce(
    (acc, item) => acc + item[1].amount,
    0
  );
  let formattedOverallAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(overallAmount);

  return (
    <ExpensesPageContainer>
      <ExpensesTitle>
        {location.pathname === '/expenses' ? 'Expenses' : 'Savings'}
      </ExpensesTitle>
      <ChartContainer>
        <ChartPrice>{formattedOverallAmount}</ChartPrice>
      </ChartContainer>
      <ExpensesDetails currentPath={location.pathname} />
    </ExpensesPageContainer>
  );
};

export default ExpensesPage;
