import styled from "styled-components";

// import Overlay from "../overlay/overlay.component";

export const IconPickerContainer = styled.div`
  width: 80%;
  height: 40%;
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
`;

// export const IconPickerOverlay = styled(Overlay)`
//   width: 100vw;
//   height: calc(var(--vh, 1vh) * 100);
//   display: ${({ open }) => (open ? 'flex' : 'none')};
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   z-index: 1;
//   background-color: rgba(0, 0, 0, 0.3);
// `;


export const ExitForm = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  font-size: 2.5rem;
  font-weight: bold;
  cursor: pointer;
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
`;

export const IconsListItem = styled.li`
  width: 15%;
  padding: 0.5rem;
  border-radius: 15px;
  background-color: rgba(0,0,0,0.6);
  box-shadow: 0 2px 2px rgba(0,0,0,0.25);

  img {
    width: 100%;
    height: 100%;
  }
`;