import styled from 'styled-components';

export const CustomButtonContainer = styled.button`
  width: 20rem;
  height: 5rem;
  border-radius: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${({ bgColor }) => bgColor};
  border: 0;
  outline: 0;
  cursor: pointer;
  color: ${({ textColor }) => textColor};
  font-size: 2rem;
  position: relative;
  -webkit-tap-highlight-color: transparent;

  :hover {
    background-color: ${({ hoverColor }) => hoverColor};
    color: var(--white-shade);
  }

  @media (max-width: 20rem) {
    width: 19rem;
    height: 4rem;
    font-size: 1.8rem;
  }
`;
