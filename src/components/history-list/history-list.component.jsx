import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { selectCurrency, selectExpenses, selectIncome, selectHistoryLogs } from '../../redux/finance/finance.selectors';
import { generateHistoryChart } from '../../redux/finance/finance.utils'

import ExpensesIncomeBarchart from '../expenses-income-barchart/expenses-income-barchart.component';

import { HistoryListContainer, ChartList, ChartListItem } from './history-list.styles';

import { updateHistory } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const HistoryList = ({ expenses, income, history, currency, currentUser }) => {
  const [historyLogs, setHistoryLogs] = useState(history)

  useEffect(() => {
    const data = { expenses: expenses, income: income };
    const newHistoryLog = generateHistoryChart(history, data);

    if (newHistoryLog) {
      setHistoryLogs(newHistoryLog)
    }
  }, [])

  useEffect(() => {
    updateHistory(currentUser.id, historyLogs);
  }, [currentUser.id, historyLogs])

  return (
    <HistoryListContainer>
      <ChartList>
        {history.map(historyLog => (
          <>
            <ChartListItem>
              <ExpensesIncomeBarchart data={historyLog.expensesArr} currency={currency} />
            </ChartListItem>
            <ChartListItem>
              <ExpensesIncomeBarchart data={historyLog.incomeArr} currency={currency} />
            </ChartListItem>
          </>
        ))}
      </ChartList>
    </HistoryListContainer>
  );
}

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state),
  income: selectIncome(state),
  history: selectHistoryLogs(state),
  currency: selectCurrency(state),
  currentUser: selectCurrentUser(state)
})


export default connect(mapStateToProps)(HistoryList);