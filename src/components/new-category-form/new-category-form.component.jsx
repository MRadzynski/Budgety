import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { useHistory, useParams } from "react-router";
import { v4 as uuidv4 } from 'uuid';

import IconPicker from "../icon-picker/icon-picker.component";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectExpenses, selectExpensesLogs, selectIncome, selectIncomeLogs } from "../../redux/finance/finance.selectors";
import { updateFinances } from "../../firebase/firebase.utils";

import { formatName } from '../../redux/finance/finance.utils';

import {
  NewCategoryFormContainer,
  ExitForm,
  FormHeading,
  CategoryForm,
  CategoryFieldGroup,
  CategoryLabelField,
  CategoryInputField,
  CategoryIconContainer,
  CustomButtonStyled,
  CategoryInputContainer,
  ErrorMessage
} from "./new-category-form.styles";


const NewCategoryForm = ({ type, edit, currentUser, expenses, income, expensesLogs, incomeLogs }) => {
  const history = useHistory();
  const params = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState('');
  const [currentEditedCategory, setCurrentEditedCategory] = useState(null);
  const [categoryData, setCategoryData] = useState({
    category: '',
    bgColor: '#000000',
    icon: 'other',
  });

  useEffect(() => {
    if (type === 'expenses' && edit) {
      const editedCategory = expenses.find(expense => expense.id === params.categoryId)
      setCurrentEditedCategory(editedCategory)
    } else if (type === 'income' && edit) {
      const editedCategory = income.find(singleIncome => singleIncome.id === params.categoryId)
      setCurrentEditedCategory(editedCategory)
    } else {
      return;
    }
  }, [edit, expenses, income, type, params.categoryId])

  useEffect(() => {
    if (currentEditedCategory) {
      const { category, bgColor, icon } = currentEditedCategory;
      setCategoryData({ category: category, bgColor: bgColor, icon: icon })
    }
  }, [currentEditedCategory]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setCategoryData({ ...categoryData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    let duplicatedCategories;

    if (type === 'expenses') {
      duplicatedCategories = expenses.filter(expense => formatName(expense.category) === formatName(categoryData.category))
    } else if (type === 'income') {
      duplicatedCategories = income.filter(expense => formatName(expense.category) === formatName(categoryData.category))
    }

    if (duplicatedCategories.length !== 0 && !edit) {
      setError('Category already exists');
      return;
    };

    const newCategoryData = {
      id: uuidv4(),
      category: formatName(categoryData.category),
      amount: 0,
      bgColor: categoryData.bgColor,
      icon: categoryData.icon,
      logs: [],
    }

    if (type === 'expenses' && !edit) {
      const newExpensesObj = [...expenses, newCategoryData];

      updateFinances(currentUser.id, newExpensesObj, null, expensesLogs);
    } else if (type === 'income' && !edit) {
      const newIncomeObj = [...income, newCategoryData];

      updateFinances(currentUser.id, null, newIncomeObj, incomeLogs);
    } else if (type === 'expenses' && edit) {
      const { category, bgColor, icon } = newCategoryData;
      const newExpenses = expenses.map(expense => expense.id === params.categoryId ? { ...expense, category: category, bgColor: bgColor, icon: icon } : expense)

      updateFinances(currentUser.id, newExpenses, null, expensesLogs);
    } else if (type === 'income' && edit) {
      const { category, bgColor, icon } = newCategoryData;
      const newIncome = income.map(singleIncome => singleIncome.id === params.categoryId ? { ...singleIncome, category: category, bgColor: bgColor, icon: icon } : singleIncome)

      updateFinances(currentUser.id, null, newIncome, incomeLogs);
    }

    history.push(`/${type}`)
  }

  return (
    <NewCategoryFormContainer>
      <ExitForm onClick={() => history.push(`/${type}`)}>&#10005;</ExitForm>
      <FormHeading>Add Category</FormHeading>
      <CategoryForm onSubmit={handleSubmit}>
        <CategoryFieldGroup>
          <CategoryLabelField>Name</CategoryLabelField>
          <CategoryInputContainer>
            <CategoryInputField type="text" name="category" error={error} onChange={handleOnChange} value={categoryData.category} required />
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </CategoryInputContainer>
        </CategoryFieldGroup>
        <CategoryFieldGroup>
          <CategoryLabelField>Color</CategoryLabelField>
          <CategoryInputField type="color" name="bgColor" onChange={handleOnChange} value={categoryData.bgColor} required />
        </CategoryFieldGroup>
        <CategoryFieldGroup>
          <CategoryLabelField>Icon</CategoryLabelField>
          <CategoryIconContainer onClick={() => setIsOpen(true)} bgColor={categoryData.bgColor}>
            {categoryData.icon ? <img src={`/assets/icons/${categoryData.icon}.svg`} alt={`${categoryData.icon} icon`} /> : <img src={`/assets/icons/other.svg`} alt={`other icon`} />}
          </CategoryIconContainer>
        </CategoryFieldGroup>
        {isOpen && <IconPicker setCategoryData={setCategoryData} setIsOpen={setIsOpen} isOpen={isOpen} itemsColor={categoryData.bgColor} />}

        <CustomButtonStyled
          type="submit"
          bgColor="var(--primary-color)"
          hoverColor="#395ae0"
          textColor="var(--white-shade)"
        >
          {edit ? 'Edit Category' : 'Add Category'}
        </CustomButtonStyled>
      </CategoryForm>
    </NewCategoryFormContainer>
  )
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  expenses: selectExpenses(state),
  income: selectIncome(state),
  expensesLogs: selectExpensesLogs(state),
  incomeLogs: selectIncomeLogs(state)
})

export default connect(mapStateToProps)(NewCategoryForm);