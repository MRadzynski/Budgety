import {
  generateHistoryChart,
  isChartExists
} from '../redux/finance/finance.utils';
import { selectCurrentUser } from '../redux/user/user.selectors';
import {
  selectExpenses,
  selectHistoryLogs,
  selectIncome
} from '../redux/finance/finance.selectors';
import { updateHistory } from '../firebase/firebase.utils';
import { useDateInfo } from './useDateInfo';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const useHistoryChart = () => {
  const currentUser = useSelector(selectCurrentUser);
  const expenses = useSelector(selectExpenses);
  const history = useSelector(selectHistoryLogs);
  const income = useSelector(selectIncome);

  const [historyLogs, setHistoryLogs] = useState(history);

  const { currentMonth, currentYear, monthToCheck, yearToCheck } =
    useDateInfo();

  const isChartAlreadyExists = isChartExists(
    history,
    monthToCheck,
    yearToCheck
  );

  useEffect(() => {
    if (!isChartAlreadyExists) {
      const dateInfo = { currentMonth, currentYear, monthToCheck, yearToCheck };
      const data = { expenses: expenses, income: income };
      const newHistoryLog = generateHistoryChart(
        currentUser.createdAt,
        history,
        data,
        dateInfo
      );

      if (newHistoryLog) {
        setHistoryLogs(newHistoryLog);
      }
    }
  }, [
    currentMonth,
    currentUser.createdAt,
    currentYear,
    expenses,
    history,
    income,
    isChartAlreadyExists,
    monthToCheck,
    yearToCheck
  ]);

  useEffect(() => {
    if (historyLogs && !isChartAlreadyExists) {
      updateHistory(currentUser.id, historyLogs);
    }
  }, [currentUser.id, historyLogs, isChartAlreadyExists]);
};
