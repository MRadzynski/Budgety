import React from 'react';
import { connect } from 'react-redux';

import {
  selectBalance,
  selectCurrency,
  selectTotalExpensesIncomeArr,
  selectPercentageExpenses,
  selectPercentageIncome,
  selectTotalExpenses,
  selectTotalIncome,
} from '../../redux/finance/finance.selectors';

import { selectDisplayName } from '../../redux/user/user.selectors';

import { formatCurrency } from '../../redux/finance/finance.utils';

import BalanceChart from '../../components/balance-chart/balance-chart.component';

import ExpensesIncomeBarchart from '../../components/expenses-income-barchart/expenses-income-barchart.component';

import {
  HomePageContainer,
  ChartContainer,
  WelcomeText,
  ChartText,
  NoDataText,
} from './homepage.styles';

const HomePage = ({
  displayName,
  currency,
  balance,
  totalExpensesIncomeArr,
  expensesPercent,
  incomePercent,
  totalExpenses,
  totalIncome,
  totalBalance,
}) => {

  return (
    <HomePageContainer>
      <WelcomeText>Hey {displayName}! </WelcomeText>

      <ChartContainer>
        {totalBalance !== 0 ? (
          <BalanceChart data={totalExpensesIncomeArr} currency={currency} />
        ) : (
          <NoDataText>No data to present 😔</NoDataText>
        )}
        <ChartText>Balance: {formatCurrency(balance, currency)}</ChartText>
      </ChartContainer>

      <ChartContainer>
        {totalExpenses !== 0 ? (
          <ExpensesIncomeBarchart data={expensesPercent} currency={currency} />
        ) : (
          <NoDataText>No data to present 😔</NoDataText>
        )}
        <ChartText>Expenses</ChartText>
      </ChartContainer>

      <ChartContainer>
        {totalIncome !== 0 ? (
          <ExpensesIncomeBarchart data={incomePercent} currency={currency} />
        ) : (
          <NoDataText>No data to present 😔</NoDataText>
        )}
        <ChartText>Income</ChartText>
      </ChartContainer>
    </HomePageContainer>
  );
};

const mapStateToProps = (state) => ({
  displayName: selectDisplayName(state),
  currency: selectCurrency(state),
  balance: selectBalance(state),
  totalExpensesIncomeArr: selectTotalExpensesIncomeArr(state),
  expensesPercent: selectPercentageExpenses(state),
  incomePercent: selectPercentageIncome(state),
  totalExpenses: selectTotalExpenses(state),
  totalIncome: selectTotalIncome(state),
  totalBalance: selectBalance(state),
});

export default connect(mapStateToProps)(HomePage);
