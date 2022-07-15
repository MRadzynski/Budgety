import BalanceChart from '../../components/BalanceChart/BalanceChart';
import ExpensesIncomeBarchart from '../../components/ExpensesIncomeBarchart/ExpensesIncomeBarchart';
import React from 'react';
import {
  ChartContainer,
  ChartText,
  HomePageContainer,
  NoDataText,
  ScrollableChartContainer,
  WelcomeText
} from './HomePage.styles';
import { connect } from 'react-redux';
import { formatCurrency } from '../../redux/finance/finance.utils';
import {
  selectCurrency,
  selectLatestBalance,
  selectLatestExpensesIncomeArr,
  selectLatestExpensesPercent,
  selectLatestExpensesTotal,
  selectLatestIncomePercent,
  selectLatestIncomeTotal
} from '../../redux/finance/finance.selectors';
import { selectDisplayName } from '../../redux/user/user.selectors';
import { useHistoryChart } from '../../hooks/useHistoryChart';

const HomePage = ({
  currency,
  displayName,
  latestBalance,
  latestExpensesIncomeArr,
  latestExpensesPercent,
  latestExpensesTotal,
  latestIncomePercent,
  latestIncomeTotal
}) => {
  useHistoryChart();

  return (
    <HomePageContainer>
      <WelcomeText>Hey {displayName}! </WelcomeText>

      <ChartContainer data-testid="balanceContainer">
        {latestBalance !== null ? (
          <BalanceChart currency={currency} data={latestExpensesIncomeArr} />
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
              currency={currency}
              data={latestExpensesPercent}
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
              currency={currency}
              data={latestIncomePercent}
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
  currency: selectCurrency(state),
  displayName: selectDisplayName(state),
  latestBalance: selectLatestBalance(state),
  latestExpensesIncomeArr: selectLatestExpensesIncomeArr(state),
  latestExpensesPercent: selectLatestExpensesPercent(state),
  latestExpensesTotal: selectLatestExpensesTotal(state),
  latestIncomePercent: selectLatestIncomePercent(state),
  latestIncomeTotal: selectLatestIncomeTotal(state)
});

export default connect(mapStateToProps)(HomePage);
