import styled from 'styled-components';

export const MenuContainer = styled.nav`
  height: 100vh;
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: rgba(73, 134, 204, 0.192);
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-40vw)')};
  transition: all 0.3s linear;

  @media screen and (min-width: 64rem) {
    width: 25vw;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 7rem;

    li {
      font-size: 2.5rem;
    }
  }
`;
