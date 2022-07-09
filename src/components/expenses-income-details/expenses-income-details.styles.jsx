import { breakpoints } from '../../styles/breakpoints';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import styled from 'styled-components';

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

export const ExpensesIncomeDetailsContainer = styled.div`
  align-items: center;
  background-color: var(--white-shade);
  border-radius: 50px 50px 0px 0px;
  bottom: -40%;
  display: flex;
  flex-direction: column;
  height: calc(var(--vh, 1vh) * 60);
  padding: 0 0 2rem 0;
  position: relative;
  width: 100%;
  z-index: 2;

  button {
    bottom: 2.5%;
    margin: auto;
    position: absolute;
  }

  @media ${breakpoints.fold} {
    border-radius: 30px 30px 0px 0px;
  }

  @media ${breakpoints.xsLaptop} {
    border-radius: 50px 50px 0px 0px;
    bottom: -45%;
    height: calc(var(--vh, 1vh) * 55);
    margin: 0 auto;
    width: 80%;
  }

  @media ${breakpoints.sLaptop} {
    button {
      bottom: 3.5%;
    }
  }

  @media ${breakpoints.lLaptop} {
    width: 70%;

    button {
      bottom: 5%;
    }
  }

  @media ${breakpoints.desktopFHD} {
    width: 65%;

    button {
      bottom: 2%;
    }
  }

  @media ${breakpoints.desktopUltrawide} {
    width: 50%;

    button {
      bottom: 2.5%;
    }
  }

  @media ${breakpoints.desktop2K} {
    button {
      bottom: 1.5%;
    }
  }

  @media ${breakpoints.desktop4K} {
    bottom: -50%;
    height: calc(var(--vh, 1vh) * 50);
  }
`;

export const Overlap = styled(Link)`
  border-top: ${({ active }) =>
    active ? '0.25rem solid var(--primary-color)' : '0'};
  color: ${({ active }) =>
    active ? 'var(--primary-color)' : 'var(--black-shade)'};
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 5px;
  padding-top: 3px;
  text-align: center;
  text-decoration: none;
  width: 30%;
  -webkit-tap-highlight-color: transparent;

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
    font-size: 2.2rem;
  }

  @media ${breakpoints.tablet} {
    border-top: ${({ active }) =>
      active ? '0.3rem solid var(--primary-color)' : '0'};
    font-size: 3.2rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 3.4rem;
  }

  @media ${breakpoints.lLaptop} {
    font-size: 3.6rem;
  }

  @media ${breakpoints.desktopFHD} {
    border-top: ${({ active }) =>
      active ? '0.4rem solid var(--primary-color)' : '0'};
    font-size: 4.2rem;
  }

  @media ${breakpoints.desktop2K} {
    border-top: ${({ active }) =>
      active ? '0.5rem solid var(--primary-color)' : '0'};
    font-size: 4.8rem;
  }

  @media ${breakpoints.desktop4K} {
    border-top: ${({ active }) =>
      active ? '0.7rem solid var(--primary-color)' : '0'};
    font-size: 7rem;
  }
`;

export const OverlapsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
