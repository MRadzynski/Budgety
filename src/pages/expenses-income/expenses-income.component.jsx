import React from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

import {
  selectExpenses,
  selectIncome,
  selectTotalExpenses,
  selectTotalIncome,
} from '../../redux/finance/finance.selectors';

import ExpensesIncomeDetails from '../../components/expenses-income-details/expenses-income-details.component';
import Chart from '../../components/chart/chart.component';

import { formatCurrency } from '../../redux/finance/finance.utils';

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
            <h1>Calculating...</h1>
          ) : (
            <ChartPrice>{formatCurrency(totalExpenses)}</ChartPrice>
          )}
        </ChartContainer>
      ) : (
        <ChartContainer>
          <Chart type={income} />
          {totalIncome === undefined ? (
            <h1>Calculating...</h1>
          ) : (
            <ChartPrice>{formatCurrency(totalIncome)}</ChartPrice>
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
});

export default connect(mapStateToProps)(ExpensesIncomePage);
