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
      <Overlap
        to="/expenses"
        active={currentPath === '/expenses' ? 'true' : null}
      >
        Expenses
      </Overlap>
      <Overlap
        to="/savings"
        active={currentPath === '/savings' ? 'true' : null}
      >
        Savings
      </Overlap>
    </OverlapsContainer>
    <CategoriesList />
    <CustomButton
      type="button"
      bgColor="var(--primary-color)"
      hoverColor="#395ae0"
      textColor="var(--white-shade)"
    >
      Add Expense
    </CustomButton>
  </ExpensesDetailsContainer>
);

export default ExpensesDetails;
