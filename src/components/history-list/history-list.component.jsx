import { useState } from 'react';
import { connect } from 'react-redux';

import { selectAllTimeExpensesPercent, selectAllTimeIncomePercent, selectHistoryLogs } from '../../redux/finance/finance.selectors';

import HistoryTab from '../history-tab/history-tab.component';

import { HistoryListContainer, HistoryChartList, HistoryChartListItem, HistoryMonthlyChartsContainer } from './history-list.styles';

const HistoryList = ({ allTimeExpensesPercent, allTimeIncomePercent, history, }) => {
  const [financeObj] = useState({ date: 'All Time', expensesArr: allTimeExpensesPercent, incomeArr: allTimeIncomePercent })

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
  allTimeExpensesPercent: selectAllTimeExpensesPercent(state),
  allTimeIncomePercent: selectAllTimeIncomePercent(state),
})

export default connect(mapStateToProps)(HistoryList);