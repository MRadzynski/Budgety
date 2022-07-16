import IconPicker from '../IconPicker/IconPicker';
import {
  CategoryFieldGroup,
  CategoryForm,
  CategoryIconContainer,
  CategoryInputContainer,
  CategoryInputField,
  CategoryLabelField,
  CustomButtonStyled,
  ErrorMessage,
  ExitForm,
  FormHeading,
  NewCategoryFormContainer
} from './NewCategoryForm.styles';
import { connect } from 'react-redux';
import { formatName } from '../../redux/finance/finance.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {
  selectExpenses,
  selectExpensesLogs,
  selectIncome,
  selectIncomeLogs
} from '../../redux/finance/finance.selectors';
import { updateFinances } from '../../firebase/firebase.utils';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

const NewCategoryForm = ({
  currentUser,
  edit,
  expenses,
  expensesLogs,
  income,
  incomeLogs,
  type
}) => {
  const [categoryData, setCategoryData] = useState({
    category: '',
    bgColor: '#000000',
    icon: 'other'
  });
  const [currentEditedCategory, setCurrentEditedCategory] = useState(null);
  const [error, setError] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (type === 'expenses' && edit) {
      const editedCategory = expenses.find(
        expense => expense.id === params.categoryId
      );
      setCurrentEditedCategory(editedCategory);
    } else if (type === 'income' && edit) {
      const editedCategory = income.find(
        singleIncome => singleIncome.id === params.categoryId
      );
      setCurrentEditedCategory(editedCategory);
    } else {
      return;
    }
  }, [edit, expenses, income, params.categoryId, type]);

  useEffect(() => {
    if (currentEditedCategory) {
      const { bgColor, category, icon } = currentEditedCategory;

      setCategoryData({ bgColor: bgColor, category: category, icon: icon });
    }
  }, [currentEditedCategory]);

  const handleExit = () => navigate(`/${type}`);

  const handleOnChange = e => {
    const { name, value } = e.target;

    setCategoryData({ ...categoryData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setError('');

    let duplicatedCategories;

    if (type === 'expenses') {
      duplicatedCategories = expenses.filter(
        expense =>
          formatName(expense.category) === formatName(categoryData.category)
      );
    } else if (type === 'income') {
      duplicatedCategories = income.filter(
        expense =>
          formatName(expense.category) === formatName(categoryData.category)
      );
    }

    if (duplicatedCategories.length !== 0 && !edit) {
      setError('Category already exists');
      return;
    }

    const newCategoryData = {
      amount: 0,
      bgColor: categoryData.bgColor,
      category: formatName(categoryData.category),
      icon: categoryData.icon,
      id: uuidv4(),
      logs: []
    };

    if (type === 'expenses' && !edit) {
      const newExpensesObj = [...expenses, newCategoryData];

      updateFinances(currentUser.id, newExpensesObj, null, expensesLogs);
    } else if (type === 'income' && !edit) {
      const newIncomeObj = [...income, newCategoryData];

      updateFinances(currentUser.id, null, newIncomeObj, incomeLogs);
    } else if (type === 'expenses' && edit) {
      const { category, bgColor, icon } = newCategoryData;

      const newExpenses = expenses.map(expense =>
        expense.id === params.categoryId
          ? { ...expense, bgColor, category, icon }
          : expense
      );

      updateFinances(currentUser.id, newExpenses, null, expensesLogs);
    } else if (type === 'income' && edit) {
      const { bgColor, category, icon } = newCategoryData;

      const newIncome = income.map(singleIncome =>
        singleIncome.id === params.categoryId
          ? {
              ...singleIncome,
              bgColor,
              category,
              icon
            }
          : singleIncome
      );

      updateFinances(currentUser.id, null, newIncome, incomeLogs);
    }

    navigate(`/${type}`);
  };

  return (
    <NewCategoryFormContainer>
      <ExitForm onClick={handleExit}>&#10005;</ExitForm>
      <FormHeading>Add Category</FormHeading>
      <CategoryForm onSubmit={handleSubmit}>
        <CategoryFieldGroup>
          <CategoryLabelField>Name</CategoryLabelField>
          <CategoryInputContainer>
            <CategoryInputField
              error={error}
              name="category"
              onChange={handleOnChange}
              required
              type="text"
              value={categoryData.category}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </CategoryInputContainer>
        </CategoryFieldGroup>
        <CategoryFieldGroup>
          <CategoryLabelField>Color</CategoryLabelField>
          <CategoryInputField
            name="bgColor"
            onChange={handleOnChange}
            required
            type="color"
            value={categoryData.bgColor}
          />
        </CategoryFieldGroup>
        <CategoryFieldGroup>
          <CategoryLabelField>Icon</CategoryLabelField>
          <CategoryIconContainer
            bgColor={categoryData.bgColor}
            onClick={() => setIsOpen(true)}
          >
            {categoryData.icon ? (
              <img
                alt={`${categoryData.icon} icon`}
                src={`/assets/icons/${categoryData.icon}.svg`}
              />
            ) : (
              <img alt="Other icon" src="/assets/icons/other.svg" />
            )}
          </CategoryIconContainer>
        </CategoryFieldGroup>
        {isOpen && (
          <IconPicker
            isOpen={isOpen}
            itemsColor={categoryData.bgColor}
            setCategoryData={setCategoryData}
            setIsOpen={setIsOpen}
          />
        )}

        <CustomButtonStyled
          bgColor="var(--primary-color)"
          hoverColor="#395ae0"
          textColor="var(--white-shade)"
          type="submit"
        >
          {edit ? 'Edit Category' : 'Add Category'}
        </CustomButtonStyled>
      </CategoryForm>
    </NewCategoryFormContainer>
  );
};

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
  expenses: selectExpenses(state),
  expensesLogs: selectExpensesLogs(state),
  income: selectIncome(state),
  incomeLogs: selectIncomeLogs(state)
});

export default connect(mapStateToProps)(NewCategoryForm);
