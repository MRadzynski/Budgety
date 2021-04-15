import React from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  selectTotalExpenses,
  selectTotalIncome,
} from '../../redux/finance/finance.selectors';

import ExpensesDetails from '../../components/expenses-details/expenses-details.component';

import { formatCurrency } from '../../redux/finance/finance.utils';

import {
  ExpensesPageContainer,
  ExpensesTitle,
  ChartContainer,
  ChartPrice,
} from './expenses.styles';

const ExpensesPage = ({ totalExpenses, totalIncome }) => {
  let location = useLocation();

  return (
    <ExpensesPageContainer>
      <ExpensesTitle>
        {location.pathname.includes('/expenses') ? 'Expenses' : 'Income'}
      </ExpensesTitle>
      <ChartContainer>
        {location.pathname.includes('/expenses') ? (
          <ChartContainer>
            {totalExpenses === undefined ? (
              <h1>Calculating...</h1>
            ) : (
              <ChartPrice>{formatCurrency(totalExpenses)}</ChartPrice>
            )}
          </ChartContainer>
        ) : (
          <ChartContainer>
            {totalIncome === undefined ? (
              <h1>Calculating...</h1>
            ) : (
              <ChartPrice>{formatCurrency(totalIncome)}</ChartPrice>
            )}
          </ChartContainer>
        )}
      </ChartContainer>
      <ExpensesDetails currentPath={location.pathname} />
    </ExpensesPageContainer>
  );
};

const mapStateToProps = (state) => ({
  totalExpenses: selectTotalExpenses(state),
  totalIncome: selectTotalIncome(state),
});

export default connect(mapStateToProps)(ExpensesPage);
