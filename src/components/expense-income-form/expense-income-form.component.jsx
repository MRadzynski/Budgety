import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

import {
  selectCurrency,
  selectExpenses,
  selectIncome,
  selectExpensesLogs,
  selectIncomeLogs
} from '../../redux/finance/finance.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { updateFinances } from '../../firebase/firebase.utils';

import {
  ExpenseIncomeFormContainer,
  ExitForm,
  AddExpenseIncomeForm,
  FormHeading,
  FormFieldContainer,
  FormInput,
  FormLabel,
  SelectList,
  ListItem,
  CustomButtonStyled
} from './expense-income-form.styles';

const ExpenseIncomeForm = ({
  type,
  expenses,
  income,
  expensesLogs,
  incomeLogs,
  currentUser,
  currency,
}) => {
  const history = useHistory();
  const location = useLocation();

  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const index = location.pathname.lastIndexOf('/');
    const categoryName = location.pathname.slice(index + 1);

    if (categoryName.includes('add-')) return;

    setCategory(categoryName);
  }, [location]);

  const handleChange = (e) => {
    let correctNum = e.target.value;

    if (e.target.value.includes(',')) {
      correctNum = e.target.value.replace(',', '.');
    }
    setPrice(correctNum);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(price) === 0) return;

    const formattedPrice = Number((+price).toFixed(2));

    const newFinanceObj = {
      id: uuidv4(),
      amount: formattedPrice,
      date: new Date(),
    }

    if (type === 'expenses') {
      const newExpenseObj = expenses.map((expense) => {
        if (expense.category === category) {
          expense.amount += formattedPrice;
          expense.logs.push(newFinanceObj);
          newFinanceObj.category = category;
        }
        return expense;
      });
      expensesLogs.push(newFinanceObj);

      updateFinances(currentUser.id, newExpenseObj, null, expensesLogs);
    } else {
      const newIncomeObj = income.map((singleIncome) => {
        if (singleIncome.category === category) {
          singleIncome.amount += formattedPrice;
          singleIncome.logs.push(newFinanceObj);
          newFinanceObj.category = category;
        }
        return singleIncome;
      });
      incomeLogs.push(newFinanceObj);

      updateFinances(currentUser.id, null, newIncomeObj, incomeLogs);
    }

    setCategory('');
    setPrice('');
  };

  return (
    <ExpenseIncomeFormContainer>
      <ExitForm onClick={() => history.push(`/${type}`)}>&#10005;</ExitForm>
      <FormHeading>
        Add {type === 'expenses' ? 'Expense' : 'Income'}
      </FormHeading>
      <AddExpenseIncomeForm
        onClick={() => (open ? setOpen(!open) : open)}
        onSubmit={handleSubmit}
      >
        <FormFieldContainer>
          <FormLabel>Price ({currency})</FormLabel>
          <FormInput
            type="text"
            value={price || ''}
            pattern="[0-9]+([\.,]{0,1}([0-9]{0,2}))"
            onChange={handleChange}
            inputMode="decimal"
            required
          ></FormInput>
        </FormFieldContainer>
        <FormFieldContainer>
          <FormLabel>Category</FormLabel>
          <FormInput readOnly value={category} onClick={() => setOpen(!open)} />
          {type === 'expenses' ? (
            <SelectList open={open}>
              {expenses.map((expense) => (
                <ListItem
                  key={expense.category}
                  value={expense.category}
                  onClick={() => setCategory(expense.category)}
                >
                  {expense.category}
                </ListItem>
              ))}
            </SelectList>
          ) : (
            <SelectList open={open}>
              {income.map((singleIncome) => (
                <ListItem
                  key={singleIncome.category}
                  value={singleIncome.category}
                  onClick={() => setCategory(singleIncome.category)}
                >
                  {singleIncome.category}
                </ListItem>
              ))}
            </SelectList>
          )}
        </FormFieldContainer>
        <CustomButtonStyled
          type="submit"
          bgColor="var(--primary-color)"
          hoverColor="#395ae0"
          textColor="var(--white-shade)"
        >
          Confirm
        </CustomButtonStyled>
      </AddExpenseIncomeForm>
    </ExpenseIncomeFormContainer>
  );
};

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state),
  income: selectIncome(state),
  expensesLogs: selectExpensesLogs(state),
  incomeLogs: selectIncomeLogs(state),
  currentUser: selectCurrentUser(state),
  currency: selectCurrency(state),
});

export default connect(mapStateToProps)(ExpenseIncomeForm);
