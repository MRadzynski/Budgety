import styled from 'styled-components';

export const HistoryTabContainer = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 6);
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 2rem;
  padding-left: 1rem;
  border-radius: 10px;
  background-color: var(--white-shade);
  cursor: pointer;

  &:hover {
    background-color: var(--light-gray);
  }

  @media (min-width: 48rem){
    height: calc(var(--vh, 1vh) * 6);
    padding-left: 2rem;
    border-radius: 20px;
  }

  @media (min-width: 64rem){
    height: calc(var(--vh, 1vh) * 7);
    padding-left: 3rem;
  }

  @media (min-width: 160rem) {
    border-radius: 30px;
  }

  @media (min-width: 240rem) {
    height: calc(var(--vh,1vh) * 10);
  }
`;

export const DateDescription = styled.h3`
  color: var(--primary-color);
  font-size: 1.3rem;

  @media (min-width: 48rem){
    font-size: 2rem;
  }

  @media (min-width: 64rem){
    font-size: 2.4rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 2.2rem;
  }

  @media (min-width: 80rem) and (orientation: landscape) {
    font-size: 2.4rem;
  }

  @media (min-width: 120rem) {
    font-size: 2.8rem;
  }

  @media (min-width: 160rem) {
    font-size: 3rem;
  }

  @media (min-width: 240rem) {
    font-size: 4.5rem;
  }
`;

export const ExpandArrow = styled.span`
  color: var(--secondary-color);
  font-size: 1.5rem;
  transition: transform 0.2s linear;
  transform: ${({ isOpen }) => isOpen ? 'rotate(90deg)' : 'rotate(0)'};

  @media (min-width: 48rem){
    font-size: 2rem;
  }

  @media (min-width: 64rem){
    font-size: 2.4rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 2.2rem;
  }

  @media (min-width: 80rem) and (orientation: landscape) {
    font-size: 2.4rem;
  }

  @media (min-width: 120rem) {
    font-size: 2.8rem;
  }

  @media (min-width: 160rem) {
    font-size: 3rem;
  }

  @media (min-width: 240rem) {
    font-size: 4.5rem;
  }
`;

export const HistoryChartContainer = styled.div`
  width: 100%;
  height: 13rem;
  padding: 0.25rem 0 0.25rem;
  border-radius: 10px;
  background-color: var(--white-shade);

  @media (min-width: 48rem){
    height: 15rem;
  }

  @media (min-width: 64rem){
    width: 90%;
    height: 17rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    width: 90%;
    height: 15rem;
  }

  @media (min-width: 80rem) and (orientation: landscape) {
    width: 85%;
    height: 17rem;
  }

  @media (min-width: 120rem) {
    height: 20rem;
  }

  @media (min-width: 240rem) {
    height: 27rem;
  }
`;

export const HistoryChartTitle = styled.h3`
  padding-top:0.5rem;
  color: var(--primary-color);
  font-size: 1.5rem;
  word-spacing: 0.3rem;

  @media (min-width: 48rem){
    padding-top: 1rem;
    font-size: 2rem;
  }

  @media (min-width: 64rem){
    padding: 1.2rem 0;
    font-size: 2.6rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 2.2rem;
  }

  @media (min-width: 80rem) and (orientation: landscape) {
    font-size: 2.6rem;
  }

  @media (min-width: 120rem) {
    font-size: 2.8rem;
  }

  @media (min-width: 160rem) {
    font-size: 3rem;
  }

  @media (min-width: 240rem) {
    font-size: 4.8rem;
  }
`;

export const HistoryChartBalance = styled.h2`
  padding-bottom: 1rem;
  color: ${({ surplus }) => surplus ? 'var(--successMessage)' : 'var(--errorMessage)'};
  font-size: 1.8rem;
  word-spacing: 0.5rem;

  @media (min-width: 48rem){
    padding: 1rem 0;
    font-size: 2.4rem;
  }

  @media (min-width: 64rem){
    padding: 1.5rem 0;
    font-size: 3rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 2.8rem;
  }

  @media (min-width: 80rem) and (orientation: landscape) {
    padding: 2.5rem 0;
    font-size: 3rem;
  }

  @media (min-width: 90rem) and (orientation: landscape) {
    font-size: 3.4rem;
  }

  @media (min-width: 120rem) {
    padding: 3rem 0;
    font-size: 3.6rem;
  }

  @media (min-width: 160rem) {
    font-size: 3.8rem;
  }

  @media (min-width: 240rem) {
    font-size: 6rem;
  }
`;

export const NoDataInfo = styled.h4`
  margin: 1rem 0 1.5rem 0;
  color: #9e9e9e;
  font-size: 1.5rem;

  @media (min-width: 48rem){
    font-size: 2rem;
  }

  @media (min-width: 64rem){
    margin-top: 2rem;
    font-size: 2.6rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 2.2rem;
  }

  @media (min-width: 80rem) and (orientation: landscape) {
    font-size: 2.4rem;
  }

  @media (min-width: 120rem) {
    font-size: 2.6rem;
  }

  @media (min-width: 160rem) {
    font-size: 3rem;
  }

  @media (min-width: 240rem) {
    font-size: 4.8rem;
  }
`;