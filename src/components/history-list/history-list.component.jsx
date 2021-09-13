import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { selectCurrency, selectExpenses, selectIncome } from '../../redux/finance/finance.selectors';
import { generateHistoryChart } from '../../redux/finance/finance.utils'

import ExpensesIncomeBarchart from '../expenses-income-barchart/expenses-income-barchart.component';

import { HistoryListContainer, ChartList, ChartListItem } from './history-list.styles';

import { updateHistory } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const HistoryList = ({ expenses, income, currency, currentUser }) => {
  const [historyLogs, setHistoryLogs] = useState([])

  useEffect(() => {
    const data = { expenses: expenses, income: income };
    setHistoryLogs(generateHistoryChart(data))
  }, [])

  useEffect(() => {
    console.log('hist', historyLogs);
    updateHistory(currentUser.id, historyLogs)
  }, [historyLogs])

  return (
    <HistoryListContainer>
      <ChartList>
        <ChartListItem>
          <ExpensesIncomeBarchart data={historyLogs.expensesArr} currency={currency} />
        </ChartListItem>
        <ChartListItem>
          <ExpensesIncomeBarchart data={historyLogs.incomeArr} currency={currency} />
        </ChartListItem>
      </ChartList>
    </HistoryListContainer>
  );
}

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state),
  income: selectIncome(state),
  currency: selectCurrency(state),
  currentUser: selectCurrentUser(state)
})


export default connect(mapStateToProps)(HistoryList);