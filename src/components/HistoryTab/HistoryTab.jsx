import ExpensesIncomeBarchart from '../ExpensesIncomeBarchart/ExpensesIncomeBarchart';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  DateDescription,
  ExpandArrow,
  HistoryChartBalance,
  HistoryChartContainer,
  HistoryChartTitle,
  HistoryTabContainer,
  NoDataInfo,
  ScrollableChartContainer
} from './HistoryTab.styles';
import {
  formatCurrency,
  formatMonth,
  getMonthlyFinanceSum
} from '../../redux/finance/finance.utils';
import { selectCurrency } from '../../redux/finance/finance.selectors';

const HistoryTab = ({ currency, data: { date, expensesArr, incomeArr } }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  const expensesSum = getMonthlyFinanceSum(expensesArr);
  const incomeSum = getMonthlyFinanceSum(incomeArr);

  return (
    <>
      <HistoryTabContainer onClick={handleClick}>
        <ExpandArrow isOpen={isOpen}>&#10095;</ExpandArrow>
        <DateDescription>{formatMonth(date)}</DateDescription>
      </HistoryTabContainer>
      {isOpen && (
        <>
          <HistoryChartTitle>
            Expenses: {formatCurrency(expensesSum, currency)}
          </HistoryChartTitle>
          {expensesSum ? (
            <HistoryChartContainer>
              <ScrollableChartContainer>
                <ExpensesIncomeBarchart
                  currency={currency}
                  data={expensesArr}
                />
              </ScrollableChartContainer>
            </HistoryChartContainer>
          ) : (
            <NoDataInfo>No Expenses Recorded</NoDataInfo>
          )}

          <HistoryChartTitle>
            Income: {formatCurrency(incomeSum, currency)}
          </HistoryChartTitle>
          {incomeSum ? (
            <HistoryChartContainer>
              <ScrollableChartContainer>
                <ExpensesIncomeBarchart currency={currency} data={incomeArr} />
              </ScrollableChartContainer>
            </HistoryChartContainer>
          ) : (
            <NoDataInfo>No Income Recorded</NoDataInfo>
          )}

          <HistoryChartBalance balance={incomeSum - expensesSum}>
            Balance: {formatCurrency(incomeSum - expensesSum, currency)}
          </HistoryChartBalance>
        </>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  currency: selectCurrency(state)
});

export default connect(mapStateToProps)(HistoryTab);
