import React, { useState } from 'react';
import { connect } from 'react-redux';

import { selectCurrency } from '../../redux/finance/finance.selectors';
import { getMonthlyFinanceSum, formatCurrency, formatMonth } from '../../redux/finance/finance.utils';

import ExpensesIncomeBarchart from '../expenses-income-barchart/expenses-income-barchart.component';

import { HistoryTabContainer, HistoryChartContainer, HistoryChartTitle, HistoryChartBalance, DateDescription, ExpandArrow, NoDataInfo } from './history-tab.styles';

const HistoryTab = ({ data, currency }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expensesSum] = useState(getMonthlyFinanceSum(data.expensesArr));
  const [incomeSum] = useState(getMonthlyFinanceSum(data.incomeArr));

  const handleClick = () => setIsOpen(!isOpen)

  return (
    <>
      <HistoryTabContainer onClick={handleClick}>
        <ExpandArrow isOpen={isOpen}>&#10095;</ExpandArrow>
        <DateDescription>{formatMonth(data.date)}</DateDescription>
      </HistoryTabContainer>
      {isOpen &&
        <>
          <HistoryChartTitle>
            Expenses: {formatCurrency(expensesSum)}
          </HistoryChartTitle>
          {expensesSum ?
            <HistoryChartContainer>
              <ExpensesIncomeBarchart data={data.expensesArr} currency={currency} />
            </HistoryChartContainer> : <NoDataInfo>No Expenses Recorded</NoDataInfo>
          }

          <HistoryChartTitle>
            Income: {formatCurrency(incomeSum)}
          </HistoryChartTitle>
          {incomeSum ?
            <HistoryChartContainer>
              <ExpensesIncomeBarchart data={data.incomeArr} currency={currency} />
            </HistoryChartContainer> : <NoDataInfo>No Income Recorded</NoDataInfo>
          }

          <HistoryChartBalance balance={incomeSum - expensesSum}>
            Balance: {formatCurrency(incomeSum - expensesSum)}
          </HistoryChartBalance>
        </>
      }
    </>
  )
}

const mapStateToProps = (state) => ({
  currency: selectCurrency(state),
})

export default connect(mapStateToProps)(HistoryTab);