import React, { useState } from 'react';
import { connect } from 'react-redux';

import { selectExpenses } from '../../redux/finance/finance.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { setExpenses } from '../../redux/finance/finance.actions';

import CustomButton from '../custom-button/custom-button.component';

import { updateFinances } from '../../firebase/firebase.utils';

import {
  ExpenseFormContainer,
  ExitForm,
  AddExpenseForm,
  FormHeading,
  FormFieldContainer,
  FormInput,
  FormLabel,
  SelectList,
  ListItem,
} from './expense-form.styles';

const ExpenseForm = ({ expenses, currentUser, setExpenses }) => {
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    let correctNum = Number(e.target.value);
    if (e.target.value.includes(',')) {
      correctNum = Number(e.target.value.replace(',', '.'));
    }
    setPrice(correctNum);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (price === 0) return;

    const newExpensesObj = expenses.map((expense) => {
      if (expense.category === category) {
        expense.amount += price;
      }
      return expense;
    });
    setExpenses(newExpensesObj);

    updateFinances(currentUser.id, newExpensesObj);

    setCategory('');
    setPrice(0);
  };

  return (
    <ExpenseFormContainer>
      <ExitForm>&#10005;</ExitForm>
      <FormHeading>Add Expense</FormHeading>
      <AddExpenseForm
        onClick={() => (open ? setOpen(!open) : open)}
        onSubmit={handleSubmit}
      >
        <FormFieldContainer>
          <FormLabel>Price ($)</FormLabel>
          <FormInput
            type="text"
            pattern="[0-9]+([\.,]{0,1}([0-9]{0,2}))"
            onChange={handleChange}
            required
          ></FormInput>
        </FormFieldContainer>
        <FormFieldContainer>
          <FormLabel>Category</FormLabel>
          <FormInput readOnly value={category} onClick={() => setOpen(!open)} />
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
        </FormFieldContainer>
        <CustomButton
          type="submit"
          bgColor="var(--primary-color)"
          hoverColor="#395ae0"
          textColor="var(--white-shade)"
        >
          Confirm
        </CustomButton>
      </AddExpenseForm>
    </ExpenseFormContainer>
  );
};

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state),
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  setExpenses: (expenses) => dispatch(setExpenses(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
