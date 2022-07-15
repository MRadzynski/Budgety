import Chart from '../../components/Chart/Chart';
import ExpensesIncomeDetails from '../../components/ExpensesIncomeDetails/ExpensesIncomeDetails';
import React from 'react';
import Spinner from '../../components/Spinner/Spinner';
import {
  ChartContainer,
  ChartPrice,
  ExpensesIncomePageContainer,
  ExpensesIncomeTitle
} from './ExpensesIncomePage.styles';
import { connect } from 'react-redux';
import { formatCurrency } from '../../redux/finance/finance.utils';
import {
  selectCurrency,
  selectLatestExpenses,
  selectLatestExpensesTotal,
  selectLatestIncome,
  selectLatestIncomeTotal
} from '../../redux/finance/finance.selectors';
import { useLocation } from 'react-router-dom';

const ExpensesIncomePage = ({
  currency,
  latestExpenses,
  latestExpensesTotal,
  latestIncome,
  latestIncomeTotal
}) => {
  const { pathname } = useLocation();

  return (
    <ExpensesIncomePageContainer>
      <ExpensesIncomeTitle>
        {pathname.includes('/expenses') ? 'Expenses' : 'Income'}
      </ExpensesIncomeTitle>
      {pathname.includes('/expenses') ? (
        <ChartContainer>
          <Chart data={latestExpenses} />
          {latestExpensesTotal === undefined ? (
            <Spinner />
          ) : (
            <ChartPrice>
              {formatCurrency(latestExpensesTotal, currency)}
            </ChartPrice>
          )}
        </ChartContainer>
      ) : (
        <ChartContainer>
          <Chart data={latestIncome} />
          {latestIncomeTotal === undefined ? (
            <Spinner />
          ) : (
            <ChartPrice>
              {formatCurrency(latestIncomeTotal, currency)}
            </ChartPrice>
          )}
        </ChartContainer>
      )}
      <ExpensesIncomeDetails currentPath={pathname} />
    </ExpensesIncomePageContainer>
  );
};

const mapStateToProps = state => ({
  currency: selectCurrency(state),
  latestExpenses: selectLatestExpenses(state),
  latestExpensesTotal: selectLatestExpensesTotal(state),
  latestIncome: selectLatestIncome(state),
  latestIncomeTotal: selectLatestIncomeTotal(state)
});

export default connect(mapStateToProps)(ExpensesIncomePage);
