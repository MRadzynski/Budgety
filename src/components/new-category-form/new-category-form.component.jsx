import { useState } from "react";
import { connect } from 'react-redux';
import { useHistory } from "react-router";
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
  CustomButtonStyled
} from "./new-category-form.styles";


const NewCategoryForm = ({ type, currentUser, expenses, income, expensesLogs, incomeLogs }) => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [categoryData, setCategoryData] = useState({
    category: '',
    bgColor: 'rgba(0,0,0,0.6)',
    icon: '',
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setCategoryData({ ...categoryData, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCategoryData = {
      id: uuidv4(),
      category: formatName(categoryData.category),
      amount: 0,
      bgColor: categoryData.bgColor,
      icon: categoryData.icon,
      logs: [],
    }

    if (type === 'expenses') {
      const newExpensesObj = [...expenses, newCategoryData];
      updateFinances(currentUser.id, newExpensesObj, null, expensesLogs);
    } else if (type === 'income') {
      const newIncomeObj = [...income, newCategoryData];
      updateFinances(currentUser.id, null, newIncomeObj, incomeLogs);
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
          <CategoryInputField type="text" name="category" onChange={handleOnChange} required />
        </CategoryFieldGroup>
        <CategoryFieldGroup>
          <CategoryLabelField>Color</CategoryLabelField>
          <CategoryInputField type="color" name="bgColor" onChange={handleOnChange} required />
        </CategoryFieldGroup>
        <CategoryFieldGroup>
          <CategoryLabelField>Icon</CategoryLabelField>
          <CategoryIconContainer onClick={() => setIsOpen(true)} bgColor={categoryData.bgColor}>
            {categoryData.icon ? <img src={`/assets/icons/${categoryData.icon}.svg`} alt={`${categoryData.icon} icon`} /> : <img src={`/assets/icons/other.svg`} alt={`other icon`} />}
          </CategoryIconContainer>
        </CategoryFieldGroup>
        {isOpen && <IconPicker setCategoryData={setCategoryData} setIsOpen={setIsOpen} isOpen={isOpen} />}

        <CustomButtonStyled
          type="submit"
          bgColor="var(--primary-color)"
          hoverColor="#395ae0"
          textColor="var(--white-shade)"
        >
          Add Category
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