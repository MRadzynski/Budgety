import React from 'react';

import Navbar from '../../components/navbar/navbar.component';
import { ExpensesPageContainer } from './expenses.styles';
import ExpensesDetails from '../../components/expenses-details/expenses-details.component';

const ExpensesPage = () => (
  <ExpensesPageContainer>
    <ExpensesDetails />
    <Navbar />
  </ExpensesPageContainer>
);

export default ExpensesPage;
