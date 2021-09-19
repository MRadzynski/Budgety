import styled from 'styled-components';

import { breakpoints } from '../../styles/breakpoints';

export const CategoriesListContainer = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 44);
  display: flex;
  flex-direction: column;

  @media ${breakpoints.lPhone} {
    height: calc(var(--vh, 1vh) * 43.5);
  }

  @media ${breakpoints.tablet} {
    height: calc(var(--vh, 1vh) * 43);
  }

  @media ${breakpoints.lTabletPortrait} {
    height: calc(var(--vh, 1vh) * 47);
  }

  @media ${breakpoints.xsLaptop} {
    height: calc(var(--vh, 1vh) * 34);
  }

  @media ${breakpoints.sLaptop} {
    height: calc(var(--vh, 1vh) * 35);
  }

  @media ${breakpoints.laptop} {
    height: calc(var(--vh, 1vh) * 39);
  }

  @media ${breakpoints.lLaptop} {
    height: calc(var(--vh, 1vh) * 35);
  }

  @media ${breakpoints.desktopFHD} {
    height: calc(var(--vh, 1vh) * 36);
  }

  @media ${breakpoints.desktopUltrawide} {
    height: calc(var(--vh, 1vh) * 37);
  }

  @media ${breakpoints.desktop2K} {
    height: calc(var(--vh, 1vh) * 40);
  }

  @media ${breakpoints.desktop4K} {
    height: calc(var(--vh, 1vh) * 38);
  }
`;

export const CategoryList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;
  margin-top: 3rem;
  padding: 0rem 0;
  border-radius: 10%;
  list-style: none;
  overflow: hidden scroll;

  @media ${breakpoints.fold} {
    gap: 1rem;
  }

  @media ${breakpoints.xsPhone} {
    margin-top: 2rem;
  }

  @media ${breakpoints.sPhone} {
    gap: 1.2rem;
  }

  @media ${breakpoints.lPhone} {
    gap: 1.2rem;
    margin: 3rem 0 -1rem 0;
  }

  @media ${breakpoints.tablet} {
    gap: 2rem;
    margin-bottom: -2rem;
  }

  @media ${breakpoints.xsLaptop} {
    gap: 2rem;
    margin-top: 1rem;
  }

  @media ${breakpoints.sLaptop} {
    gap: 2.5rem;
  }

  @media ${breakpoints.desktopFHD} {
    margin-top: 3rem;
    margin-bottom: -3rem;
  }

  @media ${breakpoints.desktopUltrawide} {
    margin-top: 2rem;
  }

  @media ${breakpoints.desktop2K} {
    gap: 3rem;
    margin-top: 3rem;
  }

  @media ${breakpoints.desktop4K} {
    gap: 4rem;
    margin-top: 5rem;
  }
`;

export const Category = styled.li`
  width: 90%;
  display: flex;
  padding: 1rem;
  border-radius: 15px;
  background-color: #eaeaea;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  :last-child {
    margin-bottom: 1rem;
  }
`;

export const CategoryLogo = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 3rem;
  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  img {
    width: 75%;
    height: 75%;
  }

  @media ${breakpoints.xsLaptop} {
    width: 13%;
  }

  @media ${breakpoints.sLaptop} {
    width: 11%;
    margin-right: 4rem;
  }

  @media ${breakpoints.desktopUltrawide} {
    width: 10%;
    margin-left: 1rem;
  }

  @media ${breakpoints.desktop2K} {
    width: 12%;
  }

  @media ${breakpoints.desktop4K} {
    width: 11%;
    margin: 1rem 5rem 1rem 1rem;
  }
`;

export const CategoryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media ${breakpoints.fold} {
    gap: 0.3rem;
  }

  @media ${breakpoints.tablet} {
    gap: 0.7rem;
  }

  @media ${breakpoints.xsLaptop} {
    gap: 1.2rem;
  }

  @media ${breakpoints.desktopFHD} {
    gap: 1.5rem;
  }

  @media ${breakpoints.desktop4K} {
    gap: 2.2rem;
  }
`;

export const CategoryName = styled.h2`
  font-size: 2.2rem;

  @media ${breakpoints.fold} {
    font-size: 1.8rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 2rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 2rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 3rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 3.2rem;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 3.8rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 4.2rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 6rem;
  }
`;

export const CategoryPrice = styled.h3`
  font-size: 1.6rem;

  @media ${breakpoints.fold} {
    font-size: 1.3rem;
  }

  @media ${breakpoints.sPhone} {
    font-size: 1.4rem;
  }

  @media ${breakpoints.lPhone} {
    font-size: 1.4rem;
  }

  @media ${breakpoints.tablet} {
    font-size: 2.2rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 2.4rem;
  }

  @media ${breakpoints.desktopFHD} {
    font-size: 3rem;
  }

  @media ${breakpoints.desktop2K} {
    font-size: 3.2rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 4.2rem;
  }
`;
