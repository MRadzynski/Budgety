import styled from 'styled-components';

export const CustomButtonContainer = styled.button`
  width: 20rem;
  height: 5rem;
  border-radius: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: var(--white-shade);
  border: 0;
  outline: 0;
  cursor: pointer;
  color: var(--black-shade);
  font-size: 2rem;
  position: relative;
  /* position: absolute;
  top: 50%;
  left: 30%; */

  :hover {
    background-color: #dee2e6;
  }
`;
