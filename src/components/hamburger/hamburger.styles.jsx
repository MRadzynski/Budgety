import styled from 'styled-components';

export const HamburgerContainer = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: fixed;
  top: 1.5rem;
  left: 2rem;
  z-index: 10;

  span {
    width: 3rem;
    height: 0.5rem;
    border-radius: 10px;
    background-color: #043d53;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
