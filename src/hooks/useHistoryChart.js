import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectCurrentUser } from '../redux/user/user.selectors';
import { selectExpenses, selectIncome, selectHistoryLogs } from '../redux/finance/finance.selectors';
import { generateHistoryChart, isChartExists } from '../redux/finance/finance.utils'

import { updateHistory } from '../firebase/firebase.utils';
import useDateInfo from './useDateInfo';

const useHistoryChart = () => {
  const currentUser = useSelector(selectCurrentUser);
  const expenses = useSelector(selectExpenses);
  const income = useSelector(selectIncome);
  const history = useSelector(selectHistoryLogs);

  const [historyLogs, setHistoryLogs] = useState(history);

  const { currentMonth, currentYear, monthToCheck, yearToCheck } = useDateInfo();

  const isChartAlreadyExists = isChartExists(history, monthToCheck, yearToCheck);

  useEffect(() => {
    if (!isChartAlreadyExists) {
      const dateInfo = { currentMonth, currentYear, monthToCheck, yearToCheck };
      const data = { expenses: expenses, income: income };
      const newHistoryLog = generateHistoryChart(currentUser.createdAt, history, data, dateInfo);

      if (newHistoryLog) {
        setHistoryLogs(newHistoryLog)
      }
    }
  }, [currentUser.createdAt, expenses, income, history, isChartAlreadyExists, currentMonth, currentYear, monthToCheck, yearToCheck])

  useEffect(() => {
    if (historyLogs && !isChartAlreadyExists) {
      updateHistory(currentUser.id, historyLogs);
    }
  }, [currentUser.id, historyLogs, isChartAlreadyExists])
}

export default useHistoryChart;