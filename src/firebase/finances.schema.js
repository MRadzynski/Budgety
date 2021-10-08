import { v4 as uuidv4 } from 'uuid';

const FinanceSchema = {
  expenses: [
    {
      id: uuidv4(),
      category: 'Food',
      amount: 0,
      bgColor: '#CDB4DB',
      icon: 'food',
      logs: []
    },
    {
      id: uuidv4(),
      category: 'Health',
      amount: 0,
      bgColor: '#FFC8DD',
      icon: 'health',
      logs: []
    },
    {
      id: uuidv4(),
      category: 'Family',
      amount: 0,
      bgColor: '#BDE0FE',
      icon: 'family',
      logs: []
    },
    {
      id: uuidv4(),
      category: 'Bills',
      amount: 0,
      bgColor: '#A0C4FF',
      icon: 'bills',
      logs: []
    },
    {
      id: uuidv4(),
      category: 'Fashion',
      amount: 0,
      bgColor: '#C07EED',
      icon: 'fashion',
      logs: []
    },
    {
      id: uuidv4(),
      category: 'House',
      amount: 0,
      bgColor: '#8783E0',
      icon: 'house',
      logs: []
    },
    {
      id: uuidv4(),
      category: 'Gas',
      amount: 0,
      bgColor: '#A983F7',
      icon: 'gas',
      logs: []
    },
    {
      id: uuidv4(),
      category: 'Other',
      amount: 0,
      bgColor: '#839CF7',
      icon: 'other',
      logs: []
    }
  ],
  income: [
    {
      id: uuidv4(),
      category: 'Job',
      amount: 0,
      bgColor: '#4FF6DD',
      icon: 'job',
      logs: []
    },
    {
      id: uuidv4(),
      category: 'Additional work',
      amount: 0,
      bgColor: '#44D495',
      icon: 'additional_work',
      logs: []
    },
    {
      id: uuidv4(),
      category: 'Sale',
      amount: 0,
      bgColor: '#89F64F',
      icon: 'sale',
      logs: []
    },
    {
      id: uuidv4(),
      category: 'Gifts',
      amount: 0,
      bgColor: '#57EB82',
      icon: 'gifts',
      logs: []
    },
    {
      id: uuidv4(),
      category: 'Other',
      amount: 0,
      bgColor: '#44D444',
      icon: 'other',
      logs: []
    },
  ],
  expensesLogs: [],
  incomeLogs: [],
  historyLogs: [],
  currency: 'USD',
};

export default FinanceSchema;
