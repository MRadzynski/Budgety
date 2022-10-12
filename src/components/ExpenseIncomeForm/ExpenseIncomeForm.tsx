import React, { useEffect, useState } from 'react';
import {
  AddExpenseIncomeForm,
  CustomButtonStyled,
  ExitForm,
  ExpenseIncomeFormContainer,
  FormFieldContainer,
  FormHeading,
  FormInput,
  FormLabel,
  ListItem,
  RevertAction,
  SelectList
} from './ExpenseIncomeForm.styles';
import { connect } from 'react-redux';
import {
  ExpensesIncomeWithLogsData,
  ICurrentUser,
  SingleExpenseIncomeLogData
} from '../../utils/interfaces';
import {
  selectCurrency,
  selectExpenses,
  selectExpensesLogs,
  selectIncome,
  selectIncomeLogs
} from '../../redux/finance/finance.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { updateFinances } from '../../firebase/firebase.utils';
import { useLocation, useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

interface ExpenseIncomeFormProps {
  currency: string;
  currentUser: ICurrentUser;
  expenses: ExpensesIncomeWithLogsData[];
  expensesLogs: SingleExpenseIncomeLogData[];
  income: ExpensesIncomeWithLogsData[];
  incomeLogs: SingleExpenseIncomeLogData[];
  type: string;
}

interface ReduxStore {
  currentUser: ICurrentUser;
  expenses: ExpensesIncomeWithLogsData[];
  expensesLogs: SingleExpenseIncomeLogData;
  income: ExpensesIncomeWithLogsData[];
  incomeLogs: SingleExpenseIncomeLogData;
}

const ExpenseIncomeForm = ({
  currency,
  currentUser,
  expenses,
  expensesLogs,
  income,
  incomeLogs,
  type
}: ExpenseIncomeFormProps) => {
  const [category, setCategory] = useState('');
  const [isRevertShown, setIsRevertShown] = useState(false);
  const [lastExpenseCategoryId, setLastExpenseCategoryId] = useState<
    string | null
  >(null);
  const [lastIncomeCategoryId, setLastIncomeCategoryId] = useState<
    string | null
  >(null);
  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const index = location.pathname.lastIndexOf('/');
    const categoryName = location.pathname.slice(index + 1);

    if (categoryName.includes('add-')) return;

    setCategory(categoryName);
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let correctNum = Number(e.target.value);

    if (e.target.value.includes(',')) {
      correctNum = Number(e.target.value.replace(',', '.'));
    }
    setPrice(correctNum);
  };

  const handleExit = () => navigate(`/${type}`);

  const handleRevert = () => {
    if (type === 'expenses') {
      expensesLogs.pop();
      const newExpenseObj = expenses.map(expense => {
        if (expense.id === lastExpenseCategoryId) {
          const entryToRemove = expense.logs.slice().pop()!;
          const amountToSubstact = entryToRemove.amount;
          const entryIdToRemove = entryToRemove.id;
          expense.amount -= amountToSubstact;
          expense.logs = expense.logs.filter(
            entry => entry.id !== entryIdToRemove
          );
        }
        return expense;
      });

      updateFinances(currentUser.id, newExpenseObj, null, expensesLogs);
      setLastExpenseCategoryId(null);
    } else if (type === 'income') {
      incomeLogs.pop();
      const newIncomeObj = income.map(singleIncome => {
        if (singleIncome.id === lastIncomeCategoryId) {
          const entryToRemove = singleIncome.logs.slice().pop()!;
          const amountToSubstact = entryToRemove.amount;
          const entryIdToRemove = entryToRemove.id;
          singleIncome.amount -= amountToSubstact;
          singleIncome.logs = singleIncome.logs.filter(
            entry => entry.id !== entryIdToRemove
          );
        }
        return singleIncome;
      });

      updateFinances(currentUser.id, null, newIncomeObj, incomeLogs);
      setLastIncomeCategoryId(null);
    }
    setIsRevertShown(false);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (Number(price) === 0) return;

    const formattedPrice = Number((+price).toFixed(2));

    const newFinanceObj = {
      amount: formattedPrice,
      bgColor: '',
      category: '',
      categoryId: '',
      date: new Date(),
      id: uuidv4()
    };

    if (type === 'expenses') {
      const newExpenseObj = expenses.map(expense => {
        if (expense.category === category) {
          expense.amount += formattedPrice;
          expense.logs.push(newFinanceObj);
          newFinanceObj.bgColor = expense.bgColor;
          newFinanceObj.category = category;
          newFinanceObj.categoryId = expense.id;
        }
        return expense;
      });

      if (
        newFinanceObj.bgColor &&
        newFinanceObj.category &&
        newFinanceObj.categoryId
      ) {
        expensesLogs.push(newFinanceObj);
        updateFinances(currentUser.id, newExpenseObj, null, expensesLogs);
        setLastExpenseCategoryId(newFinanceObj.categoryId);
      }
    } else {
      const newIncomeObj = income.map(singleIncome => {
        if (singleIncome.category === category) {
          singleIncome.amount += formattedPrice;
          singleIncome.logs.push(newFinanceObj);
          newFinanceObj.bgColor = singleIncome.bgColor;
          newFinanceObj.category = category;
          newFinanceObj.categoryId = singleIncome.id;
        }
        return singleIncome;
      });

      if (
        newFinanceObj.bgColor &&
        newFinanceObj.category &&
        newFinanceObj.categoryId
      ) {
        incomeLogs.push(newFinanceObj);
        updateFinances(currentUser.id, null, newIncomeObj, incomeLogs);
        setLastIncomeCategoryId(newFinanceObj.categoryId);
      }
    }

    setCategory('');
    setPrice(0);
    setIsRevertShown(true);
  };

  const toggleOpen = () => setOpen(!open);

  return (
    <ExpenseIncomeFormContainer>
      <ExitForm onClick={handleExit}>&#10005;</ExitForm>
      <FormHeading>
        Add {type === 'expenses' ? 'Expense' : 'Income'}
      </FormHeading>
      {isRevertShown && (
        <RevertAction onClick={handleRevert}>&#8634;</RevertAction>
      )}
      <AddExpenseIncomeForm
        onClick={() => open && setOpen(!open)}
        onSubmit={handleSubmit}
      >
        <FormFieldContainer>
          <FormLabel>Price ({currency})</FormLabel>
          <FormInput
            inputMode="decimal"
            onChange={handleChange}
            pattern="[0-9]+([\.,]{0,1}([0-9]{0,2}))"
            required
            type="text"
            value={price || ''}
          ></FormInput>
        </FormFieldContainer>
        <FormFieldContainer>
          <FormLabel>Category</FormLabel>
          <FormInput onClick={toggleOpen} readOnly value={category} />
          {type === 'expenses' ? (
            <SelectList open={open}>
              {expenses.map(({ category }) => (
                <ListItem
                  key={category}
                  onClick={() => setCategory(category)}
                  value={category}
                >
                  {category}
                </ListItem>
              ))}
            </SelectList>
          ) : (
            <SelectList open={open}>
              {income.map(({ category }) => (
                <ListItem
                  key={category}
                  onClick={() => setCategory(category)}
                  value={category}
                >
                  {category}
                </ListItem>
              ))}
            </SelectList>
          )}
        </FormFieldContainer>
        <CustomButtonStyled
          bgColor="var(--primary-color)"
          hoverColor="#395ae0"
          textColor="var(--white-shade)"
          type="submit"
        >
          Confirm
        </CustomButtonStyled>
      </AddExpenseIncomeForm>
    </ExpenseIncomeFormContainer>
  );
};

const mapStateToProps = (state: ReduxStore) => ({
  currency: selectCurrency(state),
  currentUser: selectCurrentUser(state),
  expenses: selectExpenses(state),
  expensesLogs: selectExpensesLogs(state),
  income: selectIncome(state),
  incomeLogs: selectIncomeLogs(state)
});

export default connect(mapStateToProps)(ExpenseIncomeForm);
