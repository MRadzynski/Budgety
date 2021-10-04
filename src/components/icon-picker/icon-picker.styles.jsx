import styled from "styled-components";

import { breakpoints } from "../../styles/breakpoints";

import Overlay from "../overlay/overlay.component";

export const IconPickerContainer = styled.div`
  width: 80%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20%;
  left: 10%;
  z-index: 2;
  padding: 1rem 0.25rem;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 6px 6px rgba(0,0,0,0.25);

  @media ${breakpoints.xsLaptop} {
    width: 60%;
    left: 20%;
    top: 15%;
  }

  @media ${breakpoints.xsLaptop} {
    width: 50%;
    left: 25%;
  }

  @media ${breakpoints.desktop4K} {
    padding: 3rem 1rem;
  }
`;

export const IconPickerOverlay = styled(Overlay)`
  width: 100vw;
  height: calc(var(--vh, 1vh) * 60);
  display: ${({ open }) => (open ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  border-radius: 50px 50px 0px 0px;
  background-color: rgba(0, 0, 0, 0.3);

  @media ${breakpoints.fold} {
    border-radius: 30px 30px 0px 0px;
  }

  @media ${breakpoints.xsLaptop} {
    height: calc(var(--vh, 1vh) * 55);
    width: 80vw;
    border-radius: 50px 50px 0px 0px;
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


export const ExitForm = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  z-index: 3;
  font-size: 2.5rem;
  font-weight: bold;
  cursor: pointer;

  @media ${breakpoints.fold} {
    font-size: 2rem;
  }

  @media ${breakpoints.phone} {
    top: 0;
    font-size: 2.5rem;
  }

  @media ${breakpoints.tablet} {
    top: 0.5rem;
    left: 1.25rem;
    font-size: 3.5rem;
  }

  @media ${breakpoints.lTabletPortrait} {
    font-size: 4rem;
  }

  @media ${breakpoints.xsLaptop} {
    font-size: 3rem;
  }

  @media ${breakpoints.sDesktop} {
    left: 1.25rem;
    font-size: 3.5rem;
  }

  @media ${breakpoints.desktop4K} {
    font-size: 5rem;
  }
`;

export const IconsList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items:center;
  justify-content:center;
  gap: 1rem;
  padding: 2.5rem 1.5rem;
  list-style: none;
  overflow-y: scroll;

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
  width: 15%;
  padding: 0.5rem;
  border-radius: 15px;
  background-color: ${({ bgColor }) => bgColor};
  box-shadow: 0 2px 2px rgba(0,0,0,0.25);

  img {
    width: 100%;
    height: 100%;
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