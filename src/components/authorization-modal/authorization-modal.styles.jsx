import styled from 'styled-components';

export const ErrorMessage = styled.span`
  font-size: 1.6rem;
  color: var(--errorMessage);
  text-align: center;
  margin: 1rem 0 -1rem 0;
`;

export const ModalLabel = styled.label`
  width: 80%;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  margin-top: -1.5rem;
`;

export const ModalInput = styled.input`
  width: 75%;
  height: 15%;
  background-color: #e0e0e0;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  outline: 0;
  border: 0;
  border-radius: 1.5rem;
  font-size: 2.2rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: -2rem;
  padding: 0 1rem;
  letter-spacing: 0.6rem;
`;

export const ModalForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
