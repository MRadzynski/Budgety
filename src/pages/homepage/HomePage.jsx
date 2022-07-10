import React from 'react';
import { connect } from 'react-redux';

import { selectDisplayName } from '../../redux/user/user.selectors';
import {
  selectCurrency,
  selectLatestIncomeTotal,
  selectLatestExpensesTotal,
  selectLatestExpensesPercent,
  selectLatestIncomePercent,
  selectLatestExpensesIncomeArr,
  selectLatestBalance
} from '../../redux/finance/finance.selectors';

import { formatCurrency } from '../../redux/finance/finance.utils';
import useHistoryChart from '../../hooks/useHistoryChart';

import BalanceChart from '../../components/BalanceChart/BalanceChart';
import ExpensesIncomeBarchart from '../../components/ExpensesIncomeBarchart/ExpensesIncomeBarchart';

import {
  HomePageContainer,
  ChartContainer,
  ScrollableChartContainer,
  WelcomeText,
  ChartText,
  NoDataText
} from './HomePage.styles';

const HomePage = ({
  displayName,
  currency,
  latestExpensesTotal,
  latestIncomeTotal,
  latestExpensesPercent,
  latestIncomePercent,
  latestExpensesIncomeArr,
  latestBalance
}) => {
  useHistoryChart();

  return (
    <HomePageContainer>
      <WelcomeText>Hey {displayName}! </WelcomeText>

      <ChartContainer data-testid="balanceContainer">
        {latestBalance !== null ? (
          <BalanceChart data={latestExpensesIncomeArr} currency={currency} />
        ) : (
          <NoDataText>No data to present 😔</NoDataText>
        )}
        <ChartText data-testid="balanceValue">
          Balance: {formatCurrency(latestBalance, currency)}
        </ChartText>
      </ChartContainer>

      <ChartContainer data-testid="expensesContainer">
        <ScrollableChartContainer>
          {latestExpensesTotal !== 0 ? (
            <ExpensesIncomeBarchart
              data={latestExpensesPercent}
              currency={currency}
            />
          ) : (
            <NoDataText>No data to present 😔</NoDataText>
          )}
        </ScrollableChartContainer>
        <ChartText>Expenses</ChartText>
      </ChartContainer>

      <ChartContainer data-testid="incomeContainer">
        <ScrollableChartContainer>
          {latestIncomeTotal !== 0 ? (
            <ExpensesIncomeBarchart
              data={latestIncomePercent}
              currency={currency}
            />
          ) : (
            <NoDataText>No data to present 😔</NoDataText>
          )}
        </ScrollableChartContainer>
        <ChartText>Income</ChartText>
      </ChartContainer>
    </HomePageContainer>
  );
};

const mapStateToProps = state => ({
  displayName: selectDisplayName(state),
  currency: selectCurrency(state),
  latestExpensesTotal: selectLatestExpensesTotal(state),
  latestIncomeTotal: selectLatestIncomeTotal(state),
  latestExpensesPercent: selectLatestExpensesPercent(state),
  latestIncomePercent: selectLatestIncomePercent(state),
  latestExpensesIncomeArr: selectLatestExpensesIncomeArr(state),
  latestBalance: selectLatestBalance(state)
});

export default connect(mapStateToProps)(HomePage);
