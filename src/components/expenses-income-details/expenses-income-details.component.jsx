import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

import {
  selectCurrency,
  selectLatestExpenses,
  selectLatestIncome,
} from '../../redux/finance/finance.selectors';

import CategoriesList from '../categories-list/categories-list.component';
import ExpenseIncomeForm from '../expense-income-form/expense-income-form.component';
import NewCategoryForm from '../new-category-form/new-category-form.component';

import {
  ExpensesIncomeDetailsContainer,
  OverlapsContainer,
  Overlap,
  CustomButtonStyled
} from './expenses-income-details.styles';

const ExpensesDetails = ({ currentPath, latestExpenses, latestIncome, currency }) => {
  const history = useHistory();

  return (
    <ExpensesIncomeDetailsContainer>
      {!currentPath.includes('/add') && !currentPath.includes('/edit') ? (
        <>
          <OverlapsContainer>
            <Overlap
              to="/expenses"
              active={currentPath === '/expenses' ? 'true' : null}
            >
              Expenses
            </Overlap>
            <Overlap
              to="/income"
              active={currentPath === '/income' ? 'true' : null}
            >
              Income
            </Overlap>
          </OverlapsContainer>
          {currentPath === '/expenses' ? (
            <CategoriesList categoriesData={latestExpenses} currency={currency} />
          ) : (
            <CategoriesList categoriesData={latestIncome} currency={currency} />
          )}
          <CustomButtonStyled
            type="button"
            bgColor="var(--primary-color)"
            hoverColor="#395ae0"
            textColor="var(--white-shade)"
            onClick={() =>
              history.push(`${currentPath}/add-${currentPath.slice(1)}`)
            }
          >
            {currentPath === '/expenses' ? 'Add Expense' : 'Add Income'}
          </CustomButtonStyled>
        </>
      ) : (
        currentPath.includes('add-new-category')
          ? <NewCategoryForm type={currentPath.split('/')[1]} />
          : (currentPath.includes('edit-category') ? <NewCategoryForm type={currentPath.split('/')[1]} edit />
            : <ExpenseIncomeForm type={currentPath.split('/')[1]} />)
      )}
    </ExpensesIncomeDetailsContainer>
  );
};

const mapStateToProps = (state) => ({
  latestExpenses: selectLatestExpenses(state),
  latestIncome: selectLatestIncome(state),
  currency: selectCurrency(state),
});

export default connect(mapStateToProps)(ExpensesDetails);
