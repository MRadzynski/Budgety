import React from 'react';
import { connect } from 'react-redux';

import BalanceChart from '../../components/balance-chart/balance-chart.component';
import {
  selectBalance,
  selectTotalIncome,
  selectTotalExpenses,
} from '../../redux/finance/finance.selectors';

import { formatCurrency } from '../../redux/finance/finance.utils';

import {
  HomePageContainer,
  ChartContainer,
  WelcomeText,
  BalanceText,
} from './homepage.styles';

const HomePage = ({ totalExpenses, totalIncome, balance }) => {
  const totalExpenseIncomeArr = [
    { amount: totalExpenses, name: 'Expenses', bgColor: '#E6504C' },
    { amount: totalIncome, name: 'Income', bgColor: '#44D495' },
  ];
  return (
    <HomePageContainer>
      <WelcomeText>Hey ...! </WelcomeText>
      <ChartContainer>
        <BalanceChart data={totalExpenseIncomeArr} />
        <BalanceText>Balance: {formatCurrency(balance)}</BalanceText>
      </ChartContainer>
    </HomePageContainer>
  );
};

const mapStateToProps = (state) => ({
  totalExpenses: selectTotalExpenses(state),
  totalIncome: selectTotalIncome(state),
  balance: selectBalance(state),
});

export default connect(mapStateToProps)(HomePage);
