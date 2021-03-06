import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

import {
  selectCurrency,
  selectExpenses,
  selectIncome,
} from '../../redux/finance/finance.selectors';

import ExpenseIncomeForm from '../expense-income-form/expense-income-form.component';
import CategoriesList from '../categories-list/categories-list.component';
import CustomButton from '../custom-button/custom-button.component';
import {
  ExpensesIncomeDetailsContainer,
  OverlapsContainer,
  Overlap,
} from './expenses-income-details.styles';

const ExpensesDetails = ({ currentPath, expenses, income, currency }) => {
  const history = useHistory();

  return (
    <ExpensesIncomeDetailsContainer>
      {!currentPath.includes('/add') ? (
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
            <CategoriesList categoriesData={expenses} currency={currency} />
          ) : (
            <CategoriesList categoriesData={income} currency={currency} />
          )}
          <CustomButton
            type="button"
            bgColor="var(--primary-color)"
            hoverColor="#395ae0"
            textColor="var(--white-shade)"
            onClick={() =>
              history.push(`${currentPath}/add-${currentPath.slice(1)}`)
            }
          >
            {currentPath === '/expenses' ? 'Add Expense' : 'Add Income'}
          </CustomButton>
        </>
      ) : (
        <ExpenseIncomeForm type={currentPath.split('/')[1]} />
      )}
    </ExpensesIncomeDetailsContainer>
  );
};

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state),
  income: selectIncome(state),
  currency: selectCurrency(state),
});

export default connect(mapStateToProps)(ExpensesDetails);
