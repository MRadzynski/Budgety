import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import { selectExpenses } from '../../redux/finance/finance.selectors';
import { setExpenses } from '../../redux/finance/finance.actions';

import ExpensesDetails from '../../components/expenses-details/expenses-details.component';

import { formatCurrency } from '../../redux/finance/finance.utils';

import {
  ExpensesPageContainer,
  ExpensesTitle,
  ChartContainer,
  ChartPrice,
} from './expenses.styles';

const ExpensesPage = ({ setExpenses, sumExpenses }) => {
  useEffect(() => setExpenses(), [setExpenses]);
  let location = useLocation();

  return (
    <ExpensesPageContainer>
      <ExpensesTitle>
        {location.pathname === '/expenses' ? 'Expenses' : 'Savings'}
      </ExpensesTitle>
      <ChartContainer>
        <ChartPrice>{formatCurrency(sumExpenses)}</ChartPrice>
      </ChartContainer>
      <ExpensesDetails currentPath={location.pathname} />
    </ExpensesPageContainer>
  );
};

const mapStateToProps = (state) => ({
  sumExpenses: selectExpenses(state),
});

const mapDispatchToProps = (dispatch) => ({
  setExpenses: () => dispatch(setExpenses()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesPage);
