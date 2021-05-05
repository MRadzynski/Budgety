import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

import {
  selectCurrency,
  selectExpenses,
  selectIncome,
} from '../../redux/finance/finance.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { setExpenses, setIncome } from '../../redux/finance/finance.actions';

import CustomButton from '../custom-button/custom-button.component';

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
} from './expense-income-form.styles';

const ExpenseIncomeForm = ({
  type,
  expenses,
  income,
  currentUser,
  currency,
  setExpenses,
  setIncome,
}) => {
  const history = useHistory();
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);
  const [open, setOpen] = useState(false);

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

    const formattedPrice = Number(price);

    if (type === 'expenses') {
      const newExpenseObj = expenses.map((expense) => {
        if (expense.category === category) {
          expense.amount += formattedPrice;
          expense.amount = Number(expense.amount.toFixed(2));
        }
        return expense;
      });

      updateFinances(currentUser.id, newExpenseObj, null);
    } else {
      const newIncomeObj = income.map((singleIncome) => {
        if (singleIncome.category === category) {
          singleIncome.amount += formattedPrice;
        }
        return singleIncome;
      });

      updateFinances(currentUser.id, null, newIncomeObj);
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
        <CustomButton
          type="submit"
          bgColor="var(--primary-color)"
          hoverColor="#395ae0"
          textColor="var(--white-shade)"
        >
          Confirm
        </CustomButton>
      </AddExpenseIncomeForm>
    </ExpenseIncomeFormContainer>
  );
};

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state),
  income: selectIncome(state),
  currentUser: selectCurrentUser(state),
  currency: selectCurrency(state),
});

const mapDispatchToProps = (dispatch) => ({
  setExpenses: (expenses) => dispatch(setExpenses(expenses)),
  setIncome: (income) => dispatch(setIncome(income)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseIncomeForm);
