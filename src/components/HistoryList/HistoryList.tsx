import HistoryTab from '../HistoryTab/HistoryTab';
import { connect } from 'react-redux';
import { ExpensesIncomeData } from '../../utils/interfaces';
import {
  HistoryChartList,
  HistoryChartListItem,
  HistoryListContainer,
  HistoryMonthlyChartsContainer
} from './HistoryList.styles';
import {
  selectAllTimeExpensesPercent,
  selectAllTimeIncomePercent,
  selectHistoryLogs
} from '../../redux/finance/finance.selectors';

interface HistoryData {
  date: string;
  expensesArr: ExpensesIncomeData[];
  incomeArr: ExpensesIncomeData[];
}

interface HistoryListProps {
  allTimeExpensesPercent: ExpensesIncomeData[];
  allTimeIncomePercent: ExpensesIncomeData[];
  history: HistoryData[];
}

const HistoryList = ({
  allTimeExpensesPercent,
  allTimeIncomePercent,
  history
}: HistoryListProps) => {
  const financeObj = {
    date: 'All Time',
    expensesArr: allTimeExpensesPercent,
    incomeArr: allTimeIncomePercent
  };

  return (
    <HistoryListContainer>
      <HistoryChartList>
        <HistoryChartListItem key="allTime">
          <HistoryTab data={financeObj} />
        </HistoryChartListItem>
        <HistoryMonthlyChartsContainer>
          {history.map((historyLog, index) => (
            <HistoryChartListItem key={index}>
              <HistoryTab data={historyLog} />
            </HistoryChartListItem>
          ))}
        </HistoryMonthlyChartsContainer>
      </HistoryChartList>
    </HistoryListContainer>
  );
};

const mapStateToProps = (state: HistoryListProps) => ({
  allTimeExpensesPercent: selectAllTimeExpensesPercent(state),
  allTimeIncomePercent: selectAllTimeIncomePercent(state),
  history: selectHistoryLogs(state)
});

export default connect(mapStateToProps)(HistoryList);
