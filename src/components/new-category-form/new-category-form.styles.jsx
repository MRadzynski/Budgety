import styled from "styled-components";

import CustomButton from "../custom-button/custom-button.component";

export const NewCategoryFormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const ExitForm = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 3rem;
  font-size: 3rem;
  font-weight: bold;
  cursor: pointer;
`;

export const FormHeading = styled.h1`
  color: var(--black-shade);
  font-size: 2.5rem;
  text-align: center;
`;

export const CategoryForm = styled.form`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 1rem;
  padding: 4rem 1rem 1rem 1rem;
`;

export const CategoryFieldGroup = styled.div`
  width: 95%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 0rem 2rem;
  border-radius: 20px;
  background-color: var(--light-gray)
`;

export const CategoryLabelField = styled.label`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  color: var(--black-shade);
  font-size: 2.4rem;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
`;

export const CategoryInputField = styled.input`
  width: 50%;
  height: 60%;
  padding: 1rem;
  border: 0;
  border-radius: 5px;
  outline: none;
  background-color: var(--white-shade);
  color: var(--black-shade);
  font-size: 2.4rem;
  text-align: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &[type="color"]{
    width: 15%;
    padding: 0;
    border: 0;
    border-radius: 0;
  }
`;

export const CategoryIconContainer = styled.div`
  width: 15%;
  height: 60%;
  padding: 0.25rem;
  border: 0;
  border-radius: 5px;
  outline: none;
  background-color: var(--black-shade);
  background-color: rgba(0,0,0,0.4);
  color: var(--black-shade);
  font-size: 2.4rem;
  text-align: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  img { 
    width: 100%;
    height: 100%;
  }
`

export const CustomButtonStyled = styled(CustomButton)`


`;