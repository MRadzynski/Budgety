import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

import {
  selectCurrency,
  selectLatestExpenses,
  selectLatestExpensesTotal,
  selectLatestIncome,
  selectLatestIncomeTotal,
} from '../../redux/finance/finance.selectors';

import { formatCurrency } from '../../redux/finance/finance.utils';

import ExpensesIncomeDetails from '../../components/expenses-income-details/expenses-income-details.component';
import Chart from '../../components/chart/chart.component';
import Spinner from '../../components/spinner/spinner.component';

import {
  ExpensesIncomePageContainer,
  ExpensesIncomeTitle,
  ChartContainer,
  ChartPrice,
} from './expenses-income.styles';

const ExpensesIncomePage = ({
  latestExpensesTotal,
  latestIncomeTotal,
  latestExpenses,
  latestIncome,
  currency,
}) => {
  const location = useLocation();

  return (
    <ExpensesIncomePageContainer>
      <ExpensesIncomeTitle>
        {location.pathname.includes('/expenses') ? 'Expenses' : 'Income'}
      </ExpensesIncomeTitle>
      {location.pathname.includes('/expenses') ? (
        <ChartContainer>
          <Chart data={latestExpenses} />
          {latestExpensesTotal === undefined ? (
            <Spinner />
          ) : (
            <ChartPrice>{formatCurrency(latestExpensesTotal, currency)}</ChartPrice>
          )}
        </ChartContainer>
      ) : (
        <ChartContainer>
          <Chart data={latestIncome} />
          {latestIncomeTotal === undefined ? (
            <Spinner />
          ) : (
            <ChartPrice>{formatCurrency(latestIncomeTotal, currency)}</ChartPrice>
          )}
        </ChartContainer>
      )}
      <ExpensesIncomeDetails currentPath={location.pathname} />
    </ExpensesIncomePageContainer>
  );
};

const mapStateToProps = (state) => ({
  currency: selectCurrency(state),
  latestExpensesTotal: selectLatestExpensesTotal(state),
  latestIncomeTotal: selectLatestIncomeTotal(state),
  latestExpenses: selectLatestExpenses(state),
  latestIncome: selectLatestIncome(state)
});

export default connect(mapStateToProps)(ExpensesIncomePage);
