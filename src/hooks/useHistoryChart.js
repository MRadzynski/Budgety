import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectCurrentUser } from '../redux/user/user.selectors';
import { selectExpenses, selectIncome, selectHistoryLogs } from '../redux/finance/finance.selectors';
import { generateHistoryChart } from '../redux/finance/finance.utils'

import { updateHistory } from '../firebase/firebase.utils';

const useHistoryChart = () => {
  const currentUser = useSelector(selectCurrentUser);
  const expenses = useSelector(selectExpenses);
  const income = useSelector(selectIncome);
  const history = useSelector(selectHistoryLogs);

  const [historyLogs, setHistoryLogs] = useState(history);

  useEffect(() => {
    const data = { expenses: expenses, income: income };
    const newHistoryLog = generateHistoryChart(currentUser.createdAt, history, data);

    if (newHistoryLog) {
      setHistoryLogs(newHistoryLog)
    }
  }, [currentUser.createdAt, expenses, income, history])

  useEffect(() => {
    if (historyLogs) {
      updateHistory(currentUser.id, historyLogs);
    }
  }, [currentUser.id, historyLogs])
}

export default useHistoryChart;