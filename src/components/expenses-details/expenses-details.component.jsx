import React from 'react';

import { ExpensesDetailsContainer } from './expenses-details.styles';
import CustomButton from '../custom-button/custom-button.component';

const ExpensesDetails = () => (
  <ExpensesDetailsContainer>
    <CustomButton>Add Expense</CustomButton>
  </ExpensesDetailsContainer>
);

export default ExpensesDetails;
