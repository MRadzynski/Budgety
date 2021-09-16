import React, { useState } from 'react';
import { connect } from 'react-redux';

import { selectHistoryLogs, selectPercentageExpenses, selectPercentageIncome } from '../../redux/finance/finance.selectors';

import HistoryTab from '../history-tab/history-tab.component';

import { HistoryListContainer, HistoryChartList, HistoryChartListItem, HistoryMonthlyChartsContainer } from './history-list.styles';

const HistoryList = ({ history, expensesPercent, incomePercent }) => {
  const [financeObj] = useState({ date: 'All Time', expensesArr: expensesPercent, incomeArr: incomePercent })

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
  history: selectHistoryLogs(state),
  expensesPercent: selectPercentageExpenses(state),
  incomePercent: selectPercentageIncome(state),
})

export default connect(mapStateToProps)(HistoryList);