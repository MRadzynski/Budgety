import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
`;

export const SpinnerElement = styled.div`
  animation: spin 1s ease-in-out infinite;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  display: inline-block;
  height: 5rem;
  width: 5rem;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
