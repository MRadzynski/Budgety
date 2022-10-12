import breakpoints from '../../styles/breakpoints.json';
import CustomButton from '../CustomButton/CustomButton';
import styled from 'styled-components';

interface SelectListProps {
  open: boolean;
}

export const AddExpenseIncomeForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 80%;
  margin-top: 1rem;
  padding: 4rem 1rem 1rem 1rem;
  width: 100%;

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

export const ExitForm = styled.div`
  cursor: pointer;
  font-size: 3rem;
  font-weight: bold;
  left: 3rem;
  position: absolute;
  top: 1.5rem;

  @media ${breakpoints.fold} {
    font-size: 2.2rem;
    left: 2rem;
  }

  @media ${breakpoints.xsPhone} {
    font-size: 2.4rem;
    left: 3rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 2.6rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 3rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 3.6rem;
    left: 4rem;
    top: 2rem;
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
    font-size: 5.6rem;
    left: 4rem;
    top: 2rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 8rem;
  }
`;

export const ExpenseIncomeFormContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem;
  width: 100%;
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
    font-size: 4.8rem;
    margin-top: 1rem;
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
    font-size: 9rem;
    margin-top: 1rem;
  }
`;

export const FormFieldContainer = styled.div`
  align-items: center;
  background-color: var(--light-gray);
  border-radius: 25px;
  display: flex;
  height: 25%;
  margin-bottom: 3rem;
  position: relative;
  width: 100%;

  @media ${breakpoints.fold} {
    border-radius: 20px;
    margin-bottom: 2rem;
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
    border-radius: 35px;
    height: 25%;
    justify-content: space-evenly;
    margin-bottom: 4rem;
  }

  @media ${breakpoints.xsLaptop} {
    height: 28%;
    justify-content: space-evenly;
    width: 80%;
  }

  @media ${breakpoints.desktop2K} {
    border-radius: 50px;
  }

  @media ${breakpoints.desktop4K} {
    border-radius: 75px;
    margin-bottom: 5rem;
  }
`;

export const FormInput = styled.input`
  background-color: var(--white-shade);
  border: 0px;
  border-radius: 5px;
  color: var(--black-shade);
  cursor: pointer;
  font-size: 2.3rem;
  height: 70%;
  margin-right: 3rem;
  outline: none;
  padding: 1rem;
  text-align: center;
  width: 40%;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;

  &[type='text'] {
    text-align: right;
  }

  :-webkit-autofill,
  :-webkit-autofill:active,
  :-webkit-autofill:focus,
  :-webkit-autofill:hover {
    box-shadow: 0 0 0 1000px var(--primary-color) inset !important;
    -webkit-text-fill-color: var(--white-shade) !important;
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
    border-radius: 10px;
    font-size: 3.2rem;
    width: 30%;
  }

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

export const FormLabel = styled.label`
  font-size: 2.4rem;
  margin-left: 3rem;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  width: 50%;

  @media ${breakpoints.fold} {
    font-size: 1.6rem;
    margin-left: 2rem;
  }

  @media ${breakpoints.xsPhone} {
    font-size: 1.8rem;
    margin-left: 3rem;
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

export const ListItem = styled.li`
  background-color: white;
  border-bottom: 1px solid #eeeeee;
  font-size: 2.4rem;
  padding: 0.5rem 1rem;
  width: 100%;

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

export const RevertAction = styled.span`
  cursor: pointer;
  font-size: 3rem;
  font-weight: bold;
  position: absolute;
  right: 3rem;
  top: 1.8rem;
  -webkit-tap-highlight-color: transparent;

  @media ${breakpoints.fold} {
    font-size: 2rem;
    right: 2rem;
  }

  @media ${breakpoints.xsPhone} {
    font-size: 2.2rem;
    right: 3rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 2.4rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 2.8rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 3.6rem;
    right: 4rem;
    top: 2rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 5rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 3.6rem;
  }

  @media ${breakpoints.sDesktop} {
    font-size: 4.2rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 5.6rem;
    right: 4rem;
    top: 2.4rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 8rem;
  }
`;

export const SelectList = styled.ul<SelectListProps>`
  background-color: var(--white-shade);
  cursor: pointer;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  height: 160%;
  list-style: none;
  overflow-y: scroll;
  position: absolute;
  right: 2.5rem;
  text-align: center;
  top: 100%;
  width: 40%;

  @media ${breakpoints.lPhone} {
    height: 120%;
  }

  @media ${breakpoints.tablet} {
    height: 160%;
    margin-right: 3rem;
    width: 30%;
  }

  @media ${breakpoints.lTabletPortrait} {
    height: 120%;
    margin-right: 5rem;
  }

  @media ${breakpoints.xsLaptop} {
    height: 120%;
    margin-right: 3rem;
    width: 27%;
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
