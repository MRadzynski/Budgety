import styled from "styled-components";

import { breakpoints } from "../../styles/breakpoints";

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
    margin-top: 2rem;
    font-size: 9rem;
  }
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

  div:first-of-type input {
    cursor: text;
  }

  @media ${breakpoints.fold}{
    padding-top: 2rem;
  }

  @media ${breakpoints.lTabletPortrait}{
    margin-top: 2rem;
  }

  @media ${breakpoints.desktopFHD}{
    margin-top: 0;
  }
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
  background-color: var(--light-gray);

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
    width: 90%;
    height: 25%;
    margin-top: 1rem;
    padding: 0 5rem;
    border-radius: 45px;
  }

  @media ${breakpoints.lTabletPortrait} {
    height: 22%;
    margin-top: 3rem;
    padding: 0 6rem;
    border-radius: 45px;
  }

  @media ${breakpoints.xsLaptop} {
    width: 80%;
    height: 25%;
    padding: 0 5rem;
  }

  @media ${breakpoints.sLaptop} {
    width: 70%;
    padding: 0 6rem;
  }

  @media ${breakpoints.sDesktop} {
    width: 70%;
    margin-top: 1rem;
    border-radius: 50px;
  }

  @media ${breakpoints.desktopFHD} {
    width: 75%;
    padding: 0 8rem;
  }

  @media ${breakpoints.desktop2K} {
    width: 80%;
    margin-top: 2rem;
  }

  @media ${breakpoints.desktop4K} {
    height: 23%;
    margin-top: 4rem;
    border-radius: 75px;
  }
`;

export const CategoryLabelField = styled.label`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  color: var(--black-shade);
  font-size: 2.4rem;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);

  @media ${breakpoints.fold} {
    font-size: 1.8rem;
  }

  @media ${breakpoints.xsPhone} {
    margin-left: 0.5rem;  
    font-size: 1.9rem;
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

  @media ${breakpoints.fold} {
    font-size: 1.7rem;

    &[type="color"]{
    width: 20%;
    }
  }

  @media ${breakpoints.xsPhone} {
    font-size: 1.8rem;
    
    &[type="color"]{
      width: 17%;
    }
  }

  @media ${breakpoints.sPhone} {
    font-size: 2rem;
  }

  @media ${breakpoints.phone}{
    font-size: 2.1rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 2.4rem;
  }

  @media ${breakpoints.tablet} {
    width: 40%;
    font-size: 3.6rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 4rem;
  }

  @media ${breakpoints.xsLaptop} {
    width: 40%;
    font-size: 2.6rem;
  }

  @media ${breakpoints.sLaptop} {
    width: 35%;

    &[type="color"]{
      width: 13%;
    }
  }

  @media ${breakpoints.sDesktop} {
    font-size: 3.2rem;
  }

  @media ${breakpoints.desktopUltrawide} {
    font-size: 3.4rem;
  }

  @media ${breakpoints.desktop2K} {
    width: 40%;
    font-size: 5.2rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 7rem;
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
  background-color: ${({ bgColor }) => bgColor};
  color: var(--black-shade);
  font-size: 2.4rem;
  text-align: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  img { 
    width: 100%;
    height: 100%;
  }

  @media ${breakpoints.fold}{
    width: 20%;
  }

  @media ${breakpoints.xsPhone} {
    width: 17%;
  }

  @media ${breakpoints.sLaptop} {
    width: 13%;
  }
`

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
    height: 12rem;
    font-size: 5.5rem;
  }
`;