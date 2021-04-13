import React from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import { selectTotalExpenses } from '../../redux/finance/finance.selectors';

import ExpensesDetails from '../../components/expenses-details/expenses-details.component';

import { formatCurrency } from '../../redux/finance/finance.utils';

import {
  ExpensesPageContainer,
  ExpensesTitle,
  ChartContainer,
  ChartPrice,
} from './expenses.styles';

const ExpensesPage = ({ totalExpenses }) => {
  let location = useLocation();

  return (
    <ExpensesPageContainer>
      <ExpensesTitle>
        {location.pathname === '/expenses' ? 'Expenses' : 'Savings'}
      </ExpensesTitle>
      <ChartContainer>
        {totalExpenses === null ? (
          <h1>Calculating...</h1>
        ) : (
          <ChartPrice>{formatCurrency(totalExpenses)}</ChartPrice>
        )}
      </ChartContainer>
      <ExpensesDetails currentPath={location.pathname} />
    </ExpensesPageContainer>
  );
};

const mapStateToProps = (state) => ({
  totalExpenses: selectTotalExpenses(state),
});

export default connect(mapStateToProps)(ExpensesPage);
