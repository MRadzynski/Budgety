import React from 'react';
import { connect } from 'react-redux';

import {
  selectBalance,
  selectCurrency,
  selectTotalExpensesIncomeArr,
  selectPercentageExpenses,
  selectPercentageIncome,
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
} from './homepage.styles';

const HomePage = ({
  displayName,
  currency,
  balance,
  totalExpensesIncomeArr,
  expensesPercent,
  incomePercent,
}) => {
  return (
    <HomePageContainer>
      <WelcomeText>Hey {displayName}! </WelcomeText>

      <ChartContainer>
        <BalanceChart data={totalExpensesIncomeArr} currency={currency} />
        <ChartText>Balance: {formatCurrency(balance, currency)}</ChartText>
      </ChartContainer>

      <ChartContainer>
        <ExpensesIncomeBarchart data={expensesPercent} currency={currency} />
        <ChartText>Expenses</ChartText>
      </ChartContainer>

      <ChartContainer>
        <ExpensesIncomeBarchart data={incomePercent} currency={currency} />
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
});

export default connect(mapStateToProps)(HomePage);
