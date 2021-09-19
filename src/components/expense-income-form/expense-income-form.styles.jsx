import styled from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';

import CustomButton from '../custom-button/custom-button.component';

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

  @media ${breakpoints.tablet} {
    margin-top: 3rem;
  }

  @media ${breakpoints.xsLaptop} {
    margin-top: -1rem;
  }

  @media ${breakpoints.desktop2K} {
    margin-top: 2rem;
  }

  @media ${breakpoints.desktop4K} {
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

  @media ${breakpoints.fold} {
    left: 2rem;
    font-size: 2.2rem;
  }

  @media ${breakpoints.xsPhone} {
    left: 3rem;
    font-size: 2.4rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 2.6rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 3rem;
  }

  @media ${breakpoints.tablet} {
    top: 2rem;
    left: 4rem;
    font-size: 3.6rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 6rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 3.6rem;
  }

  @media ${breakpoints.sDesktop} {
    font-size: 4.2rem;
  }

  @media ${breakpoints.desktop2K} {
    top: 2rem;
    left: 4rem;
    font-size: 5.6rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 8rem;
  }
`;

export const FormHeading = styled.h1`
  color: var(--black-shade);
  font-size: 2.5rem;
  text-align: center;

  @media ${breakpoints.fold} {
    font-size: 2rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 2.2rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 2.8rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 3.8rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    margin-top: 1rem;
    font-size: 4.8rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 3.6rem;
  }

  @media ${breakpoints.sDesktop} {
    font-size: 4rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 6rem;
  }

  @media ${breakpoints.desktop4K} {
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
  background-color: var(--light-gray);
  margin-bottom: 3rem;
  border-radius: 25px;

  @media ${breakpoints.fold} {
    margin-bottom: 2rem;
    border-radius: 20px;
  }
  
  @media ${breakpoints.xsPhone} {
    border-radius: 25px;
  }
  
  @media ${breakpoints.phone} {
    height: 30%;
    margin-bottom: 2rem;
  }

  @media ${breakpoints.lPhone} {
    margin-bottom: 3rem;
  }

  @media ${breakpoints.tablet} {
    height: 25%;
    justify-content: space-evenly;
    margin-bottom: 4rem;
    border-radius: 35px;
  }

  @media ${breakpoints.xsLaptop} {
    width: 80%;
    height: 28%;
    justify-content: space-evenly;
  }

  @media ${breakpoints.desktop2K} {
    border-radius: 50px;
  }

  @media ${breakpoints.desktop4K} {
    margin-bottom: 5rem;
    border-radius: 75px;
  }
`;

export const FormLabel = styled.label`
  width: 50%;
  margin-left: 3rem;
  font-size: 2.4rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media ${breakpoints.fold} {
    margin-left: 2rem;
    font-size: 1.6rem;
  }

  @media ${breakpoints.xsPhone} {
    margin-left: 3rem;
    font-size: 1.8rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 2rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 2.2rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 3rem;
  }

  /* @media (min-width: 52rem) and (orientation: portrait) {
    font-size: 3.6rem;
  } */

  @media ${breakpoints.lTabletPortrait} {
    font-size: 4rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 2.6rem;
  }

  @media ${breakpoints.sDesktop} {
    font-size: 3.2rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 5.2rem;
  }

  @media ${breakpoints.desktop4K} {
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

  @media ${breakpoints.fold} {
    font-size: 1.8rem;
  }

  @media ${breakpoints.xsPhone} {
    font-size: 2rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 2.2rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 2.6rem;
  }

  @media ${breakpoints.tablet} {
    width: 30%;
    border-radius: 10px;
    font-size: 3.2rem;
  }

  /* @media (min-width: 52rem) and (orientation: portrait) {
    font-size: 3.6rem;
  } */

  @media ${breakpoints.lTabletPortrait} {
    font-size: 4.8rem;
  }

  @media ${breakpoints.xsLaptop} {
    width: 27%;
  }

  @media ${breakpoints.sDesktop} {
    font-size: 3.2rem;
  }

  @media ${breakpoints.desktopUltrawide} {
    border-radius: 15px;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 5.4rem;
  }

  @media ${breakpoints.desktop4K} {
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

  @media ${breakpoints.lPhone} {
    height: 120%;
  }

  @media ${breakpoints.tablet} {
    width: 30%;
    height: 160%;
    margin-right: 3rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    height: 120%;
    margin-right: 5rem;
  }

  @media ${breakpoints.xsLaptop} {
    width: 27%;
    height: 120%;
    margin-right: 3rem;
  }
  
  @media ${breakpoints.sLaptop} {
    margin-right: 4rem;
  }
  
  @media ${breakpoints.laptop} {
    margin-right: 5rem;
  }
  
  @media ${breakpoints.lLaptop} {
    margin-right: 4.5rem;
  }

  @media ${breakpoints.sDesktop} {
    margin-right: 5rem;
  }

  @media ${breakpoints.desktopFHD} {
    margin-right: 5.5rem;
  }

  @media ${breakpoints.desktop4K} {
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

  @media ${breakpoints.fold} {
    font-size: 1.6rem;
  }

  @media ${breakpoints.xsPhone} {
    font-size: 1.8rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 2rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 2.4rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 2.8rem;
  }

  /* @media (min-width: 52rem) and (orientation: portrait) {
    font-size: 3.2rem;
  } */

  @media ${breakpoints.lTabletPortrait} {
    font-size: 4rem;
  }

  @media ${breakpoints.sDesktop} {
    font-size: 3rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 4.4rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 6rem;
  }
`;

export const CustomButtonStyled = styled(CustomButton)`
  @media ${breakpoints.fold} {
    height: 4rem;
  }

  @media ${breakpoints.phone} {
    height: 3.5rem;
  }

  @media ${breakpoints.lPhone} {
    height: 4.5rem;
  }

  @media ${breakpoints.tablet} {
    height: 6.5rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    height: 7rem;
  }

  @media ${breakpoints.xsLaptop} {
    height: 6rem;
  }

  @media ${breakpoints.desktopFHD} {
    height: 6.5rem;
  }

  @media ${breakpoints.desktopUltrawide} {
    height: 6rem;
  }

  @media ${breakpoints.desktop2K} {
    height: 9rem;
  }

  @media ${breakpoints.desktop4K} {
    height: 10rem;
  }
`;