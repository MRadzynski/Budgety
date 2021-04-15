import styled from 'styled-components';

export const ExpenseIncomeFormContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    margin: 0 auto;
  }
`;

export const ExitForm = styled.div`
  width: 3rem;
  height: 3rem;
  position: absolute;
  top: 1.5rem;
  left: 3rem;
  font-size: 3rem;
  font-weight: bold;
  cursor: pointer;
`;

export const FormHeading = styled.h1`
  font-size: 2.5rem;
  color: var(--black-shade);
  text-align: center;
`;

export const AddExpenseIncomeForm = styled.form`
  width: 100%;
  height: 80%;
  margin-top: 1rem;
  padding: 1rem;
  padding-top: 4rem;
`;

export const FormFieldContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  background-color: #e0e0e0;
  border-radius: 25px;
  margin-bottom: 3rem;
  position: relative;
`;

export const FormInput = styled.input`
  width: 40%;
  height: 70%;
  background-color: var(--white-shade);
  color: var(--black-shade);
  border: 0px;
  border-radius: 5px;
  outline: none;
  font-size: 2.3rem;
  text-align: center;
  padding: 1rem;
  margin-right: 3rem;

  &[type='text'] {
    text-align: right;
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:active,
  :-webkit-autofill:focus {
    -webkit-text-fill-color: var(--white-shade) !important;
    box-shadow: 0 0 0 1000px var(--primary-color) inset !important;
  }
`;

export const FormLabel = styled.label`
  width: 50%;
  font-size: 2.4rem;
  margin-left: 3rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const SelectList = styled.ul`
  list-style: none;
  width: 40%;
  height: 160%;
  display: flex;
  flex-direction: column;
  background-color: var(--white-shade);
  position: absolute;
  top: 100%;
  right: 2.5rem;
  overflow-y: scroll;
  text-align: center;
  display: ${({ open }) => (open ? 'flex' : 'none')};
`;

export const ListItem = styled.li`
  width: 100%;
  font-size: 2.4rem;
  border-bottom: 1px solid #eeeeee;
  padding: 0.5rem 1rem;
  background-color: white;

  &:hover {
    background-color: #dddddd;
  }
`;
