import { useState } from "react";
import { useHistory } from "react-router";
import { v4 as uuidv4 } from 'uuid';

import IconPicker from "../icon-picker/icon-picker.component";

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


const NewCategoryForm = ({ type }) => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const [categoryData, setCategoryData] = useState({
    category: '',
    bgColor: '#000',
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
    }
    console.log(newCategoryData);

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
          <CategoryIconContainer onClick={() => setIsOpen(true)}>
            {categoryData.icon && <img src={`/assets/icons/${categoryData.icon}.svg`} alt={`${categoryData.icon} icon`} />}
          </CategoryIconContainer>
        </CategoryFieldGroup>
        {isOpen && <IconPicker setCategoryData={setCategoryData} setIsOpen={setIsOpen} isOpen={isOpen} />}

        <CustomButtonStyled
          type="submit"
          bgColor="var(--primary-color)"
          hoverColor="#395ae0"
          textColor="var(--white-shade)"
        // onClick={() =>
        //   history.push(`/${type}`)
        // }
        >
          Add Category
        </CustomButtonStyled>
      </CategoryForm>
    </NewCategoryFormContainer>
  )
}

export default NewCategoryForm;