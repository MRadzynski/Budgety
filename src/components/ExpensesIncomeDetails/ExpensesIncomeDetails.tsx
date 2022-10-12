import CategoriesList from '../CategoriesList/CategoriesList';
import ExpenseIncomeForm from '../ExpenseIncomeForm/ExpenseIncomeForm';
import NewCategoryForm from '../NewCategoryForm/NewCategoryForm';
import React from 'react';
import { connect } from 'react-redux';
import {
  CustomButtonStyled,
  ExpensesIncomeDetailsContainer,
  Overlap,
  OverlapsContainer
} from './ExpensesIncomeDetails.styles';
import { ExpensesIncomeWithoutPercentData } from '../../utils/interfaces';
import {
  selectCurrency,
  selectLatestExpenses,
  selectLatestIncome
} from '../../redux/finance/finance.selectors';
import { useNavigate } from 'react-router';

interface ExpensesIncomeDetailsProps {
  currency: string;
  currentPath: string;
  latestExpenses: ExpensesIncomeWithoutPercentData[];
  latestIncome: ExpensesIncomeWithoutPercentData[];
}

interface ReduxStore {
  currency: string;
  latestExpenses: ExpensesIncomeWithoutPercentData[];
  latestIncome: ExpensesIncomeWithoutPercentData[];
}

const ExpensesIncomeDetails = ({
  currency,
  currentPath,
  latestExpenses,
  latestIncome
}: ExpensesIncomeDetailsProps) => {
  const navigate = useNavigate();

  const handleClick = () =>
    navigate(`${currentPath}/add-${currentPath.slice(1)}`);

  const newCategoryFormType = currentPath.split('/')[1];

  return (
    <ExpensesIncomeDetailsContainer>
      {!currentPath.includes('/add') && !currentPath.includes('/edit') ? (
        <>
          <OverlapsContainer>
            <Overlap
              active={currentPath === '/expenses' ? 'true' : null}
              to="/expenses"
            >
              Expenses
            </Overlap>
            <Overlap
              active={currentPath === '/income' ? 'true' : null}
              to="/income"
            >
              Income
            </Overlap>
          </OverlapsContainer>
          {currentPath === '/expenses' ? (
            <CategoriesList
              categoriesData={latestExpenses}
              currency={currency}
            />
          ) : (
            <CategoriesList categoriesData={latestIncome} currency={currency} />
          )}
          <CustomButtonStyled
            bgColor="var(--primary-color)"
            hoverColor="#395ae0"
            onClick={handleClick}
            textColor="var(--white-shade)"
            type="button"
          >
            {currentPath === '/expenses' ? 'Add Expense' : 'Add Income'}
          </CustomButtonStyled>
        </>
      ) : currentPath.includes('add-new-category') ? (
        <NewCategoryForm type={newCategoryFormType} />
      ) : currentPath.includes('edit-category') ? (
        <NewCategoryForm edit type={newCategoryFormType} />
      ) : (
        <ExpenseIncomeForm type={newCategoryFormType} />
      )}
    </ExpensesIncomeDetailsContainer>
  );
};

const mapStateToProps = (state: ReduxStore) => ({
  currency: selectCurrency(state),
  latestExpenses: selectLatestExpenses(state),
  latestIncome: selectLatestIncome(state)
});

export default connect(mapStateToProps)(ExpensesIncomeDetails);
