import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectExpenses, selectExpensesLogs, selectIncome, selectIncomeLogs } from '../../redux/finance/finance.selectors';

import { updateFinances } from '../../firebase/firebase.utils';
import { formatCurrency } from '../../redux/finance/finance.utils';

import CustomModal from '../custom-modal/custom-modal.component';
import Spinner from '../spinner/spinner.component';

import {
  CategoriesListContainer,
  CategoryList,
  Category,
  CategoryLogo,
  CategoryInfoContainer,
  CategoryName,
  CategoryPrice,
  ActionButtons,
} from './categories-list.styles';

const CategoriesList = ({ categoriesData, currency, currentUser, expenses, income, expensesLogs, incomeLogs }) => {
  const history = useHistory();
  const location = useLocation();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

  const handleClick = (e) => {
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

  const handleDeleteClick = (e) => {
    e.stopPropagation();

    setCategoryToDelete(e.target.id);
    setIsOpenModal(true);
  }

  const deleteCategory = () => {
    let newCategoriesData;

    if (location.pathname.includes('expenses')) {
      newCategoriesData = expenses.filter(categoryData => categoryData.id !== categoryToDelete);
      updateFinances(currentUser.id, newCategoriesData, null, expensesLogs);
    } else if (location.pathname.includes('income')) {
      newCategoriesData = income.filter(categoryData => categoryData.id !== categoryToDelete);
      updateFinances(currentUser.id, null, newCategoriesData, incomeLogs);
    }

    setIsOpenModal(false);
  }

  const handleEditClick = (e) => {
    e.stopPropagation();
    const categoryId = e.target.id;

    history.push(`${location.pathname}/edit-category/${categoryId}`)
  }

  if (categoriesData === null) return <Spinner />;

  return (
    <CategoriesListContainer>
      <CategoryList>
        {categoriesData?.map((categoryData) => (
          <Category
            key={categoryData.id}
            onClick={handleClick}
            data-name={categoryData.category}
          >
            <CategoryLogo bgColor={categoryData.bgColor}>
              <img
                src={`assets/icons/${categoryData.icon}.svg`}
                alt={categoryData.icon.replace('_', ' ') + ' icon'}
              />
            </CategoryLogo>
            <CategoryInfoContainer>
              <CategoryName>{categoryData.category}</CategoryName>
              <CategoryPrice>
                {formatCurrency(categoryData.amount, currency)}
              </CategoryPrice>
            </CategoryInfoContainer>
            <ActionButtons>
              <img src={`assets/icons/edit.svg`} alt="edit category" id={categoryData.id} onClick={handleEditClick} />
              <img src={`assets/icons/remove_circle.svg`} alt="delete category" id={categoryData.id} onClick={handleDeleteClick} />
            </ActionButtons>
          </Category>
        ))}
        <Category
          key={'newCategory'}
          onClick={handleClick}
          data-name='new-category'
        >
          <CategoryLogo bgColor={'#49CDF5'}>
            <img
              src={`assets/icons/plus.svg`}
              alt={'add icon'}
            />
          </CategoryLogo>
          <CategoryInfoContainer>
            <CategoryName>Add new category</CategoryName>
          </CategoryInfoContainer>
        </Category>
      </CategoryList>
      {isOpenModal && <CustomModal open={isOpenModal} setOpen={setIsOpenModal} confirmFunction={deleteCategory} large overlayRadius>Are you sure?</CustomModal>}
    </CategoriesListContainer>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  expenses: selectExpenses(state),
  income: selectIncome(state),
  expensesLogs: selectExpensesLogs(state),
  incomeLogs: selectIncomeLogs(state),
})

export default connect(mapStateToProps)(CategoriesList);
