import React from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  selectTotalExpenses,
  selectTotalIncome,
} from '../../redux/finance/finance.selectors';

import ExpensesIncomeDetails from '../../components/expenses-income-details/expenses-income-details.component';

import { formatCurrency } from '../../redux/finance/finance.utils';

import {
  ExpensesIncomePageContainer,
  ExpensesIncomeTitle,
  ChartContainer,
  ChartPrice,
} from './expenses-income.styles';

const ExpensesIncomePage = ({ totalExpenses, totalIncome }) => {
  let location = useLocation();

  return (
    <ExpensesIncomePageContainer>
      <ExpensesIncomeTitle>
        {location.pathname.includes('/expenses') ? 'Expenses' : 'Income'}
      </ExpensesIncomeTitle>
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
      <ExpensesIncomeDetails currentPath={location.pathname} />
    </ExpensesIncomePageContainer>
  );
};

const mapStateToProps = (state) => ({
  totalExpenses: selectTotalExpenses(state),
  totalIncome: selectTotalIncome(state),
});

export default connect(mapStateToProps)(ExpensesIncomePage);
