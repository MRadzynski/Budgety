import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

import {
  selectCurrency,
  selectExpenses,
  selectIncome,
  selectTotalExpenses,
  selectTotalIncome,
} from '../../redux/finance/finance.selectors';

import ExpensesIncomeDetails from '../../components/expenses-income-details/expenses-income-details.component';
import Chart from '../../components/chart/chart.component';

import { formatCurrency } from '../../redux/finance/finance.utils';

import Spinner from '../../components/spinner/spinner.component';

import {
  ExpensesIncomePageContainer,
  ExpensesIncomeTitle,
  ChartContainer,
  ChartPrice,
} from './expenses-income.styles';

const ExpensesIncomePage = ({
  totalExpenses,
  totalIncome,
  expenses,
  income,
  currency,
}) => {
  let location = useLocation();

  return (
    <ExpensesIncomePageContainer>
      <ExpensesIncomeTitle>
        {location.pathname.includes('/expenses') ? 'Expenses' : 'Income'}
      </ExpensesIncomeTitle>
      {location.pathname.includes('/expenses') ? (
        <ChartContainer>
          <Chart type={expenses} />
          {totalExpenses === undefined ? (
            <Spinner />
          ) : (
            <ChartPrice>{formatCurrency(totalExpenses, currency)}</ChartPrice>
          )}
        </ChartContainer>
      ) : (
        <ChartContainer>
          <Chart type={income} />
          {totalIncome === undefined ? (
            <Spinner />
          ) : (
            <ChartPrice>{formatCurrency(totalIncome, currency)}</ChartPrice>
          )}
        </ChartContainer>
      )}
      <ExpensesIncomeDetails currentPath={location.pathname} />
    </ExpensesIncomePageContainer>
  );
};

const mapStateToProps = (state) => ({
  totalExpenses: selectTotalExpenses(state),
  totalIncome: selectTotalIncome(state),
  expenses: selectExpenses(state),
  income: selectIncome(state),
  currency: selectCurrency(state),
});

export default connect(mapStateToProps)(ExpensesIncomePage);
