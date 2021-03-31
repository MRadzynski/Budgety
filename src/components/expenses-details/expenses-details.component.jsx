import React from 'react';

import CategoriesList from '../categories-list/categories-list.component';
import CustomButton from '../custom-button/custom-button.component';
import {
  ExpensesDetailsContainer,
  OverlapsContainer,
  Overlap,
} from './expenses-details.styles';

const ExpensesDetails = ({ currentPath }) => (
  <ExpensesDetailsContainer>
    <OverlapsContainer>
      <Overlap to="/expenses" active={currentPath === '/expenses'}>
        Expenses
      </Overlap>
      <Overlap to="/savings" active={currentPath === '/savings'}>
        Savings
      </Overlap>
    </OverlapsContainer>
    <CategoriesList />
    <CustomButton
      type="button"
      bgColor="var(--primary-color)"
      textColor="var(--white-shade)"
    >
      Add Expense
    </CustomButton>
  </ExpensesDetailsContainer>
);

export default ExpensesDetails;
