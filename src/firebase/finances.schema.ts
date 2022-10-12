import { v4 as uuidv4 } from 'uuid';

const FinanceSchema = {
  currency: 'USD',
  expenses: [
    {
      amount: 0,
      bgColor: '#CDB4DB',
      category: 'Food',
      icon: 'food',
      id: uuidv4(),
      logs: []
    },
    {
      amount: 0,
      bgColor: '#FFC8DD',
      category: 'Health',
      icon: 'health',
      id: uuidv4(),
      logs: []
    },
    {
      amount: 0,
      bgColor: '#BDE0FE',
      category: 'Family',
      icon: 'family',
      id: uuidv4(),
      logs: []
    },
    {
      amount: 0,
      bgColor: '#A0C4FF',
      category: 'Bills',
      icon: 'bills',
      id: uuidv4(),
      logs: []
    },
    {
      amount: 0,
      bgColor: '#C07EED',
      category: 'Fashion',
      icon: 'fashion',
      id: uuidv4(),
      logs: []
    },
    {
      amount: 0,
      bgColor: '#8783E0',
      category: 'House',
      icon: 'house',
      id: uuidv4(),
      logs: []
    },
    {
      amount: 0,
      bgColor: '#A983F7',
      category: 'Gas',
      icon: 'gas',
      id: uuidv4(),
      logs: []
    },
    {
      amount: 0,
      bgColor: '#839CF7',
      category: 'Other',
      icon: 'other',
      id: uuidv4(),
      logs: []
    }
  ],
  expensesLogs: [],
  historyLogs: [],
  income: [
    {
      amount: 0,
      bgColor: '#4FF6DD',
      category: 'Job',
      icon: 'job',
      id: uuidv4(),
      logs: []
    },
    {
      amount: 0,
      bgColor: '#44D495',
      category: 'Additional work',
      icon: 'additional_work',
      id: uuidv4(),
      logs: []
    },
    {
      amount: 0,
      bgColor: '#89F64F',
      category: 'Sale',
      icon: 'sale',
      id: uuidv4(),
      logs: []
    },
    {
      amount: 0,
      bgColor: '#57EB82',
      category: 'Gifts',
      icon: 'gifts',
      id: uuidv4(),
      logs: []
    },
    {
      amount: 0,
      bgColor: '#44D444',
      category: 'Other',
      icon: 'other',
      id: uuidv4(),
      logs: []
    }
  ],
  incomeLogs: []
};

export default FinanceSchema;
