import { breakpoints } from '../../styles/breakpoints';
import CustomButton from '../custom-button/custom-button.component';
import styled from 'styled-components';

export const CategoryFieldGroup = styled.div`
  align-items: center;
  background-color: var(--light-gray);
  border-radius: 20px;
  display: flex;
  gap: 2rem;
  height: 25%;
  justify-content: space-between;
  padding: 0rem 2rem;
  width: 95%;

  @media ${breakpoints.fold} {
    border-radius: 20px;
  }

  @media ${breakpoints.xsPhone} {
    border-radius: 25px;
  }

  @media ${breakpoints.phone} {
    height: 30%;
  }

  @media ${breakpoints.lPhone} {
    border-radius: 30px;
  }

  @media ${breakpoints.tablet} {
    border-radius: 45px;
    height: 25%;
    margin-top: 1rem;
    padding: 0 5rem;
    width: 90%;
  }

  @media ${breakpoints.lTabletPortrait} {
    border-radius: 45px;
    height: 22%;
    margin-top: 3rem;
    padding: 0 6rem;
  }

  @media ${breakpoints.xsLaptop} {
    height: 25%;
    padding: 0 5rem;
    width: 80%;
  }

  @media ${breakpoints.sLaptop} {
    padding: 0 6rem;
    width: 70%;
  }

  @media ${breakpoints.sDesktop} {
    border-radius: 50px;
    margin-top: 1rem;
    width: 70%;
  }

  @media ${breakpoints.desktopFHD} {
    padding: 0 8rem;
    width: 75%;
  }

  @media ${breakpoints.desktop2K} {
    margin-top: 2rem;
    width: 80%;
  }

  @media ${breakpoints.desktop4K} {
    border-radius: 75px;
    height: 23%;
    margin-top: 4rem;
  }
`;

export const CategoryForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 80%;
  margin-top: 1rem;
  padding: 4rem 1rem 1rem 1rem;
  width: 100%;

  div:first-of-type input {
    cursor: text;
  }

  @media ${breakpoints.fold} {
    padding-top: 2rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    margin-top: 2rem;
  }

  @media ${breakpoints.desktopFHD} {
    margin-top: 0;
  }
`;

export const CategoryIconContainer = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  border: 0;
  border-radius: 5px;
  color: var(--black-shade);
  cursor: pointer;
  font-size: 2.4rem;
  height: 60%;
  outline: none;
  padding: 0.25rem;
  text-align: center;
  width: 15%;
  -webkit-tap-highlight-color: transparent;

  img {
    height: 100%;
    width: 100%;
  }

  @media ${breakpoints.fold} {
    width: 20%;
  }

  @media ${breakpoints.xsPhone} {
    width: 17%;
  }

  @media ${breakpoints.sLaptop} {
    width: 13%;
  }
`;

export const CategoryInputContainer = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 50%;

  @media ${breakpoints.tablet} {
    width: 40%;
  }

  @media ${breakpoints.xsLaptop} {
    width: 40%;
  }

  @media ${breakpoints.sLaptop} {
    width: 35%;
  }

  @media ${breakpoints.desktop2K} {
    width: 40%;
  }
`;

export const CategoryInputField = styled.input`
  background-color: var(--white-shade);
  border: ${({ error }) => (error ? '1px solid var(--errorMessage)' : '0')};
  border-radius: 5px;
  color: var(--black-shade);
  cursor: pointer;
  font-size: 2.4rem;
  height: 60%;
  outline: none;
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  width: 100%;
  -webkit-tap-highlight-color: transparent;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    box-shadow: 0 0 0px 1000px #f5f5f5 inset !important;
    -webkit-box-shadow: 0 0 0px 1000px #f5f5f5 inset !important;
  }

  &[type='color'] {
    border: 0;
    border-radius: 0;
    padding: 0;
    width: 15%;
  }

  @media ${breakpoints.fold} {
    font-size: 1.7rem;

    &[type='color'] {
      width: 20%;
    }
  }

  @media ${breakpoints.xsPhone} {
    font-size: 1.8rem;
    padding: 0.5rem;

    &[type='color'] {
      width: 17%;
    }
  }

  @media ${breakpoints.sPhone} {
    font-size: 2rem;
  }

  @media ${breakpoints.phone} {
    font-size: 2.1rem;
    padding: 0.25rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 2.4rem;
    padding: 0.5rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 3.6rem;
    padding: 1rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 4rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 2.6rem;
  }

  @media ${breakpoints.sLaptop} {
    &[type='color'] {
      width: 13%;
    }
  }

  @media ${breakpoints.lLaptop} {
    padding: 0.2rem;
  }

  @media ${breakpoints.sDesktop} {
    font-size: 3.2rem;
    padding: 0.5rem;
  }

  @media ${breakpoints.desktopUltrawide} {
    font-size: 3.4rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 5.2rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 7rem;
  }
`;

export const CategoryLabelField = styled.label`
  align-items: center;
  color: var(--black-shade);
  display: flex;
  font-size: 2.4rem;
  height: 100%;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  width: 40%;

  @media ${breakpoints.fold} {
    font-size: 1.8rem;
  }

  @media ${breakpoints.xsPhone} {
    font-size: 1.9rem;
    margin-left: 0.5rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 2.1rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 2.4rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 3.6rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 4rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 2.8rem;
  }

  @media ${breakpoints.sDesktop} {
    font-size: 3.2rem;
  }

  @media ${breakpoints.desktopUltrawide} {
    font-size: 3.4rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 5.2rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 7rem;
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
    height: 8rem;
  }

  @media ${breakpoints.xsLaptop} {
    height: 5.5rem;
  }

  @media ${breakpoints.sLaptop} {
    height: 5rem;
  }

  @media ${breakpoints.laptop} {
    height: 6rem;
  }

  @media ${breakpoints.lLaptop} {
    height: 5rem;
  }

  @media ${breakpoints.sDesktop} {
    height: 6rem;
  }

  @media ${breakpoints.desktopFHD} {
    height: 6.5rem;
  }

  @media ${breakpoints.desktopUltrawide} {
    height: 7rem;
  }

  @media ${breakpoints.desktop2K} {
    height: 9rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 5.5rem;
    height: 12rem;
  }
`;

export const ErrorMessage = styled.span`
  bottom: -1.25rem;
  color: var(--errorMessage);
  position: absolute;

  @media ${breakpoints.fold} {
    bottom: -0.75rem;
    font-size: 0.7rem;
  }

  @media ${breakpoints.xsPhone} {
    bottom: -0.7rem;
  }

  @media ${breakpoints.sPhone} {
    bottom: -1rem;
    font-size: 0.9rem;
  }

  @media ${breakpoints.phone} {
    font-size: 0.8rem;
  }

  @media ${breakpoints.lPhone} {
    bottom: -1.1rem;
    font-size: 1rem;
  }

  @media ${breakpoints.tablet} {
    bottom: -1.6rem;
    font-size: 1.5rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    bottom: -2rem;
    font-size: 2rem;
  }

  @media ${breakpoints.xsLaptop} {
    bottom: -1.1rem;
    font-size: 1.1rem;
  }

  @media ${breakpoints.lLaptop} {
    bottom: -1.2rem;
    font-size: 1.2rem;
  }

  @media ${breakpoints.sDesktop} {
    bottom: -1.8rem;
    font-size: 1.6rem;
  }

  @media ${breakpoints.desktop2K} {
    bottom: -2.4rem;
    font-size: 2.2rem;
  }

  @media ${breakpoints.desktop4K} {
    bottom: -3.2rem;
    font-size: 3.2rem;
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
    font-size: 3.4rem;
  }

  @media ${breakpoints.sDesktop} {
    font-size: 4rem;
  }

  @media ${breakpoints.desktopFHD} {
    margin-top: 1rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 6rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 9rem;
    margin-top: 2rem;
  }
`;

export const NewCategoryFormContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2rem;
  width: 100%;
`;
