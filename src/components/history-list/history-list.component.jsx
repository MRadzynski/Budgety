import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectExpenses, selectIncome, selectHistoryLogs, selectPercentageExpenses, selectPercentageIncome } from '../../redux/finance/finance.selectors';
import { generateHistoryChart } from '../../redux/finance/finance.utils'
import { updateHistory } from '../../firebase/firebase.utils';

import HistoryTab from '../history-tab/history-tab.component';

import { HistoryListContainer, HistoryChartList, HistoryChartListItem, HistoryMonthlyChartsContainer } from './history-list.styles';

const HistoryList = ({ expenses, income, history, currentUser, expensesPercent, incomePercent }) => {
  const [historyLogs, setHistoryLogs] = useState(history)
  const [financeObj] = useState({ date: 'All Time', expensesArr: expensesPercent, incomeArr: incomePercent })

  useEffect(() => {
    const data = { expenses: expenses, income: income };
    const newHistoryLog = generateHistoryChart(currentUser.createdAt, history, data);

    if (newHistoryLog) {
      setHistoryLogs(newHistoryLog)
    }
  }, [currentUser.createdAt, history, income, expenses])

  useEffect(() => {
    updateHistory(currentUser.id, historyLogs);
  }, [currentUser.id, historyLogs])

  return (
    <HistoryListContainer>
      <HistoryChartList>
        <HistoryChartListItem key='allTime'>
          <HistoryTab data={financeObj} />
        </HistoryChartListItem>

        <HistoryMonthlyChartsContainer>
          {history.map((historyLog, index) => (
            <HistoryChartListItem key={index}>
              <HistoryTab data={historyLog} />
            </HistoryChartListItem>))
          }
        </HistoryMonthlyChartsContainer>

      </HistoryChartList>
    </HistoryListContainer>
  );
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  expenses: selectExpenses(state),
  income: selectIncome(state),
  history: selectHistoryLogs(state),
  expensesPercent: selectPercentageExpenses(state),
  incomePercent: selectPercentageIncome(state),
})


export default connect(mapStateToProps)(HistoryList);