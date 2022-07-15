import CustomModal from '../CustomModal/CustomModal';
import Spinner from '../Spinner/Spinner';
import React, { useState } from 'react';
import {
  ActionButtons,
  CategoriesListContainer,
  Category,
  CategoryInfoContainer,
  CategoryList,
  CategoryLogo,
  CategoryName,
  CategoryPrice
} from './CategoriesList.styles';
import { connect } from 'react-redux';
import { formatCurrency } from '../../redux/finance/finance.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {
  selectExpenses,
  selectExpensesLogs,
  selectIncome,
  selectIncomeLogs
} from '../../redux/finance/finance.selectors';
import { updateFinances } from '../../firebase/firebase.utils';
import { useHistory, useLocation } from 'react-router';

const CategoriesList = ({
  categoriesData,
  currency,
  currentUser,
  expenses,
  expensesLogs,
  income,
  incomeLogs
}) => {
  const [categoryToDelete, setCategoryToDelete] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const history = useHistory();
  const location = useLocation();

  const deleteCategory = () => {
    let newCategoriesData;

    if (location.pathname.includes('expenses')) {
      newCategoriesData = expenses.filter(
        categoryData => categoryData.id !== categoryToDelete
      );
      updateFinances(currentUser.id, newCategoriesData, null, expensesLogs);
    } else if (location.pathname.includes('income')) {
      newCategoriesData = income.filter(
        categoryData => categoryData.id !== categoryToDelete
      );
      updateFinances(currentUser.id, null, newCategoriesData, incomeLogs);
    }

    setIsOpenModal(false);
  };

  const handleClick = e => {
    const targetURL = e.target.closest('li').dataset.name;
    const originPathname = location.pathname;
    let pathname;

    if (targetURL !== 'new-category') {
      pathname = `${originPathname}/add-${originPathname.slice(
        1
      )}/${targetURL}`;
    } else {
      pathname = `${originPathname}/add-${targetURL}`;
    }

    history.push(pathname);
  };

  const handleDeleteClick = e => {
    e.stopPropagation();

    setCategoryToDelete(e.target.id);
    setIsOpenModal(true);
  };

  const handleEditClick = e => {
    e.stopPropagation();
    const categoryId = e.target.id;

    history.push(`${location.pathname}/edit-category/${categoryId}`);
  };

  return !categoriesData ? (
    <Spinner />
  ) : (
    <CategoriesListContainer>
      <CategoryList>
        {categoriesData?.map(categoryData => (
          <Category
            data-name={categoryData.category}
            key={categoryData.id}
            onClick={handleClick}
          >
            <CategoryLogo bgColor={categoryData.bgColor}>
              <img
                alt={categoryData.icon.replace('_', ' ') + ' icon'}
                src={`assets/icons/${categoryData.icon}.svg`}
              />
            </CategoryLogo>
            <CategoryInfoContainer>
              <CategoryName>{categoryData.category}</CategoryName>
              <CategoryPrice>
                {formatCurrency(categoryData.amount, currency)}
              </CategoryPrice>
            </CategoryInfoContainer>
            <ActionButtons>
              <img
                alt="edit category"
                id={categoryData.id}
                onClick={handleEditClick}
                src="assets/icons/edit.svg"
              />
              <img
                alt="delete category"
                id={categoryData.id}
                onClick={handleDeleteClick}
                src="assets/icons/remove_circle.svg"
              />
            </ActionButtons>
          </Category>
        ))}
        <Category
          data-name="new-category"
          key={'newCategory'}
          onClick={handleClick}
        >
          <CategoryLogo bgColor="#49CDF5">
            <img alt="add icon" src="assets/icons/plus.svg" />
          </CategoryLogo>
          <CategoryInfoContainer>
            <CategoryName>Add new category</CategoryName>
          </CategoryInfoContainer>
        </Category>
      </CategoryList>
      {isOpenModal && (
        <CustomModal
          confirmFunction={deleteCategory}
          large
          open={isOpenModal}
          overlayRadius
          setOpen={setIsOpenModal}
        >
          Are you sure?
        </CustomModal>
      )}
    </CategoriesListContainer>
  );
};

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
  expenses: selectExpenses(state),
  expensesLogs: selectExpensesLogs(state),
  income: selectIncome(state),
  incomeLogs: selectIncomeLogs(state)
});

export default connect(mapStateToProps)(CategoriesList);
