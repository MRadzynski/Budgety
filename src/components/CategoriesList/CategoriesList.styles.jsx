import breakpoints from '../../styles/breakpoints.json';
import styled from 'styled-components';

export const ActionButtons = styled.div`
  align-self: center;
  display: flex;
  gap: 0.25rem;
  position: absolute;
  right: 10%;

  @media ${breakpoints.tablet} {
    img {
      height: 3.5rem;
      width: 3.5rem;
    }
  }

  @media ${breakpoints.lTabletPortrait} {
    img {
      height: 4.5rem;
      width: 4.5rem;
    }
  }

  @media ${breakpoints.xsLaptop} {
    img {
      height: 3rem;
      width: 3rem;
    }
  }

  @media ${breakpoints.sLaptop} {
    img {
      height: 3.5rem;
      width: 3.5rem;
    }
  }

  @media ${breakpoints.sDesktop} {
    img {
      height: 4rem;
      width: 4rem;
    }
  }

  @media ${breakpoints.desktop2K} {
    img {
      height: 5rem;
      width: 5rem;
    }
  }

  @media ${breakpoints.desktop4K} {
    img {
      height: 7rem;
      width: 7rem;
    }
  }
`;

export const CategoriesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(var(--vh, 1vh) * 44);
  width: 100%;

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

export const Category = styled.li`
  background-color: #eaeaea;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  padding: 1rem;
  width: 90%;

  :last-child {
    margin-bottom: 1rem;
  }
`;

export const CategoryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;

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

export const CategoryList = styled.ul`
  align-items: center;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100%;
  list-style: none;
  margin-top: 3rem;
  overflow: hidden scroll;
  padding: 0rem 0;
  position: relative;
  width: 100%;

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
    margin-bottom: -3rem;
    margin-top: 3rem;
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

export const CategoryLogo = styled.div`
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  height: 100%;
  justify-content: center;
  margin-right: 3rem;
  width: 15%;

  img {
    height: 75%;
    width: 75%;
  }

  @media ${breakpoints.xsLaptop} {
    width: 13%;
  }

  @media ${breakpoints.sLaptop} {
    margin-right: 4rem;
    width: 11%;
  }

  @media ${breakpoints.desktopUltrawide} {
    margin-left: 1rem;
    width: 10%;
  }

  @media ${breakpoints.desktop2K} {
    width: 12%;
  }

  @media ${breakpoints.desktop4K} {
    margin: 1rem 5rem 1rem 1rem;
    width: 11%;
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
