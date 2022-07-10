import breakpoints from '../../styles/breakpoints.json';
import Overlay from '../Overlay/Overlay';
import styled from 'styled-components';

export const ExitForm = styled.div`
  cursor: pointer;
  font-size: 2.5rem;
  font-weight: bold;
  left: 1rem;
  position: absolute;
  top: 0.5rem;
  z-index: 3;

  @media ${breakpoints.fold} {
    font-size: 2rem;
  }

  @media ${breakpoints.phone} {
    font-size: 2.5rem;
    top: 0;
  }

  @media ${breakpoints.tablet} {
    font-size: 3.5rem;
    left: 1.25rem;
    top: 0.5rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 4rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 3rem;
  }

  @media ${breakpoints.sDesktop} {
    font-size: 3.5rem;
    left: 1.25rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 5rem;
  }
`;

export const IconsList = styled.ul`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  height: 100%;
  justify-content: center;
  list-style: none;
  overflow-y: scroll;
  padding: 2.5rem 1.5rem;
  width: 100%;

  @media ${breakpoints.tablet} {
    gap: 2rem;
  }

  @media ${breakpoints.laptop} {
    gap: 1.5rem;
  }

  @media ${breakpoints.desktop4K} {
    gap: 3rem;
  }
`;

export const IconsListItem = styled.li`
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 15px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  padding: 0.5rem;
  width: 15%;

  img {
    height: 100%;
    width: 100%;
  }

  @media ${breakpoints.fold} {
    width: 20%;
  }

  @media ${breakpoints.sPhone} {
    width: 15%;
  }

  @media ${breakpoints.tablet} {
    width: 15%;
  }
`;

export const IconPickerContainer = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.25);
  display: flex;
  height: 60%;
  justify-content: center;
  left: 10%;
  padding: 1rem 0.25rem;
  position: absolute;
  top: 20%;
  width: 80%;
  z-index: 2;

  @media ${breakpoints.xsLaptop} {
    left: 20%;
    top: 15%;
    width: 60%;
  }

  @media ${breakpoints.xsLaptop} {
    left: 25%;
    width: 50%;
  }

  @media ${breakpoints.desktop4K} {
    padding: 3rem 1rem;
  }
`;

export const IconPickerOverlay = styled(Overlay)`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  display: ${({ open }) => (open ? 'flex' : 'none')};
  height: calc(var(--vh, 1vh) * 60);
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 1;

  @media ${breakpoints.xsLaptop} {
    height: calc(var(--vh, 1vh) * 55);
    width: 80vw;
  }

  @media ${breakpoints.lLaptop} {
    width: 70vw;
  }

  @media ${breakpoints.desktopFHD} {
    width: 65vw;
  }

  @media ${breakpoints.desktopUltrawide} {
    height: calc(var(--vh, 1vh) * 55);
    width: 50vw;
  }

  @media ${breakpoints.desktop4K} {
    height: calc(var(--vh, 1vh) * 50);
  }
`;
