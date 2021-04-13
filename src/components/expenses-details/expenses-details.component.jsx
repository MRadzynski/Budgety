import React from 'react';
import { connect } from 'react-redux';

import { selectExpenses } from '../../redux/finance/finance.selectors';

import CategoriesList from '../categories-list/categories-list.component';
import CustomButton from '../custom-button/custom-button.component';
import {
  ExpensesDetailsContainer,
  OverlapsContainer,
  Overlap,
} from './expenses-details.styles';

const ExpensesDetails = ({ currentPath, expenses }) => (
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
    <CategoriesList categoriesData={expenses} />
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

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state),
});

export default connect(mapStateToProps)(ExpensesDetails);
