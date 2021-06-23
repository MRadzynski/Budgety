import styled from 'styled-components';

export const ModalForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const ModalLabel = styled.label`
  width: 80%;
  margin-top: -1.5rem;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);

  @media (min-width: 20rem) {
    margin-bottom: -1rem;
    font-size: 1.5rem;
  }

  @media (min-width: 25rem) {
    font-size: 1.8rem;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    font-size: 2.6rem;
  }

  @media (min-width: 64rem) and (min-height: 1280px) and (orientation: portrait) {
    margin: -2.5rem 0;
    font-size: 3.6rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 2.6rem;
  }

  @media (min-width: 85rem) and (min-height: 900px) {
    font-size: 3.2rem;
  }

  @media (min-width: 100rem) and (min-height: 900px) {
    font-size: 3.6rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    font-size: 4.4rem;
  }

  @media (min-width: 240rem) {
    margin: -5rem 0 -4rem 0;
    font-size: 6rem;
  }
`;

export const ModalInput = styled.input`
  width: 75%;
  height: 15%;
  margin-bottom: -2rem;
  padding: 0 1rem;
  border: 0;
  border-radius: 1.5rem;
  outline: 0;
  background-color: var(--light-gray);
  font-size: 2.2rem;
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.6rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 20rem) {
    font-size: 1.6rem;
  }

  @media (min-width: 25rem) {
    font-size: 2.2rem;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    font-size: 2.4rem;
    letter-spacing: 0.7rem;
  }

  @media (min-width: 64rem) and (min-height: 1280px) and (orientation: portrait) {
    border-radius: 2.4rem;
    font-size: 3.2rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 2.2rem;
  }

  @media (min-width: 85rem) and (min-height: 900px) {
    width: 70%;
    font-size: 3.2rem;
    letter-spacing: 0.8rem;
  }

  @media (min-width: 90rem) and (min-height: 700px) {
    width: 70%;
    font-size: 3.4rem;
  }

  @media (min-width: 100rem) and (min-height: 900px) {
    width: 65%;
  }

  @media (min-width: 160rem) {
    font-size: 4rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    font-size: 4.4rem;
  }

  @media (min-width: 240rem) {
    border-radius: 4rem;
    font-size: 8rem;
    letter-spacing: 1rem;
  }
`;

export const ErrorMessage = styled.span`
  margin: 1rem 0 -1rem 0;
  color: var(--errorMessage);
  font-size: 1.6rem;
  text-align: center;

  @media (min-width: 20rem) {
    margin: 0.5rem 0 -1.5rem 0;
    font-size: 1.3rem;
  }

  @media (min-width: 25rem) {
    font-size: 1.6rem;
  }

  @media (min-width: 48rem) and (orientation: portrait) {
    margin: 0 0 -2rem 0;
    font-size: 2.2rem;
  }

  @media (min-width: 64rem) and (min-height: 1280px) and (orientation: portrait) {
    margin: -1.5rem 0 -3rem 0;
    font-size: 3.2rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 2rem;
  }

  @media (min-width: 85rem) and (min-height: 900px) {
    font-size: 2.4rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    font-size: 3.6rem;
  }

  @media (min-width: 240rem) {
    margin: -3rem 0 -4.5rem 0;
    font-size: 5.4rem;
  }
`;
