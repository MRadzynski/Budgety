import styled from 'styled-components';

export const ExpenseIncomeFormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const AddExpenseIncomeForm = styled.form`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  padding: 4rem 1rem 1rem 1rem;

  div:first-of-type input {
    cursor: text;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    margin-top: 3rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    margin-top: -1rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    margin-top: 2rem;
  }

  @media (min-width: 240rem) {
    margin-top: 4rem;
  }
`;

export const ExitForm = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 3rem;
  font-size: 3rem;
  font-weight: bold;
  cursor: pointer;

  @media (min-width: 20rem) {
    font-size: 2.4rem;
  }

  @media (min-width: 22.5rem) {
    font-size: 2.6rem;
  }

  @media (min-width: 25rem) {
    font-size: 3rem;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    top: 2rem;
    left: 4rem;
    font-size: 3.6rem;
  }

  @media (min-width: 64rem) and (orientation: portrait) {
    font-size: 6rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 3.6rem;
  }

  @media (min-width: 100rem) and (min-height: 900px) {
    font-size: 4.2rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    top: 2rem;
    left: 4rem;
    font-size: 5.6rem;
  }

  @media (min-width: 240rem) {
    font-size: 8rem;
  }
`;

export const FormHeading = styled.h1`
  color: var(--black-shade);
  font-size: 2.5rem;
  text-align: center;

  @media (min-width: 20rem) {
    font-size: 2rem;
  }

  @media (min-width: 22.5rem) {
    font-size: 2.2rem;
  }

  @media (min-width: 25rem) {
    font-size: 2.8rem;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    font-size: 3.8rem;
  }

  @media (min-width: 64rem) and (orientation: portrait) {
    margin-top: 1rem;
    font-size: 4.8rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 3.6rem;
  }

  @media (min-width: 100rem) and (min-height: 900px) {
    font-size: 4rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    font-size: 6rem;
  }

  @media (min-width: 240rem) {
    margin-top: 1rem;
    font-size: 9rem;
  }
`;

export const FormFieldContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  position: relative;
  background-color: #e0e0e0;
  margin-bottom: 3rem;
  border-radius: 25px;

  @media (min-width: 48rem) and (orientation: portrait) {
    justify-content: space-evenly;
    margin-bottom: 4rem;
    border-radius: 35px;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    width: 80%;
    height: 28%;
    justify-content: space-evenly;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    border-radius: 50px;
  }

  @media (min-width: 240rem) {
    margin-bottom: 5rem;
    border-radius: 75px;
  }
`;

export const FormLabel = styled.label`
  width: 50%;
  margin-left: 3rem;
  font-size: 2.4rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 20rem) {
    font-size: 1.8rem;
  }

  @media (min-width: 22.5rem) {
    font-size: 2rem;
  }

  @media (min-width: 25rem) {
    font-size: 2.2rem;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    font-size: 3rem;
  }

  @media (min-width: 52rem) and (orientation: portrait) {
    font-size: 3.6rem;
  }

  @media (min-width: 64rem) and (orientation: portrait) {
    font-size: 4rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 2.6rem;
  }

  @media (min-width: 100rem) and (min-height: 900px) {
    font-size: 3.2rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    font-size: 5.2rem;
  }

  @media (min-width: 240rem) {
    font-size: 7rem;
  }
`;

export const FormInput = styled.input`
  width: 40%;
  height: 70%;
  background-color: var(--white-shade);
  color: var(--black-shade);
  margin-right: 3rem;
  padding: 1rem;
  border: 0px;
  border-radius: 5px;
  outline: none;
  font-size: 2.3rem;
  text-align: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;

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

  @media (min-width: 20rem) {
    font-size: 2rem;
  }

  @media (min-width: 22.5rem) {
    font-size: 2.2rem;
  }

  @media (min-width: 25rem) {
    font-size: 2.6rem;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    width: 30%;
    border-radius: 10px;
    font-size: 3.2rem;
  }

  @media (min-width: 52rem) and (orientation: portrait) {
    font-size: 3.6rem;
  }

  @media (min-width: 64rem) and (orientation: portrait) {
    font-size: 4.8rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    width: 27%;
  }

  @media (min-width: 100rem) and (min-height: 900px) {
    font-size: 3.2rem;
  }

  @media (min-width: 160rem) {
    border-radius: 15px;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    font-size: 5.4rem;
  }

  @media (min-width: 240rem) {
    border-radius: 35px;
    font-size: 7.5rem;
  }
`;

export const SelectList = styled.ul`
  width: 40%;
  height: 160%;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  list-style: none;
  position: absolute;
  top: 100%;
  right: 2.5rem;
  background-color: var(--white-shade);
  overflow-y: scroll;
  text-align: center;
  cursor: pointer;

  @media (min-width: 48rem) and (orientation: portrait) {
    width: 30%;
    margin-right: 3rem;
  }

  @media (min-width: 64rem) and (orientation: portrait) {
    height: 120%;
    margin-right: 3.5rem;
  }

  @media (min-width: 64rem) and (min-height: 1366px) and (orientation: portrait) {
    margin-right: 5rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    width: 27%;
    height: 120%;
    margin-right: 3rem;
  }

  @media (min-width: 69.5rem) and (orientation: landscape) {
    margin-right: 3.5rem;
  }

  @media (min-width: 100rem) and (min-height: 900px) {
    margin-right: 5rem;
  }

  @media (min-width: 120rem) {
    margin-right: 5.5rem;
  }

  @media (min-width: 240rem) {
    margin-right: 10rem;
  }
`;

export const ListItem = styled.li`
  width: 100%;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #eeeeee;
  background-color: white;
  font-size: 2.4rem;

  &:hover {
    background-color: #dddddd;
  }

  @media (min-width: 20rem) {
    font-size: 1.8rem;
  }

  @media (min-width: 22.5rem) {
    font-size: 2rem;
  }

  @media (min-width: 25rem) {
    font-size: 2.4rem;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    font-size: 2.8rem;
  }

  @media (min-width: 52rem) and (orientation: portrait) {
    font-size: 3.2rem;
  }

  @media (min-width: 64rem) and (orientation: portrait) {
    font-size: 4rem;
  }

  @media (min-width: 100rem) and (min-height: 900px) {
    font-size: 3rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    font-size: 4.4rem;
  }

  @media (min-width: 240rem) {
    font-size: 6rem;
  }
`;
