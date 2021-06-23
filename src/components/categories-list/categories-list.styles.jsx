import styled from 'styled-components';

export const CategoriesListContainer = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 44);
  display: flex;
  flex-direction: column;

  @media (min-width: 52rem) and (orientation: portrait) {
    height: calc(var(--vh, 1vh) * 43);
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    height: calc(var(--vh, 1vh) * 34);
  }

  @media (min-width: 80rem) and (orientation: landscape) {
    height: calc(var(--vh, 1vh) * 35);
  }

  @media (min-width: 120rem) {
    height: calc(var(--vh, 1vh) * 36);
  }

  @media (min-width: 160rem) {
    height: calc(var(--vh, 1vh) * 37);
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    height: calc(var(--vh, 1vh) * 40);
  }

  @media (min-width: 240rem) {
    height: calc(var(--vh, 1vh) * 38);
  }
`;

export const CategoryList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  position: relative;
  margin-top: 3rem;
  padding: 0rem 0;
  border-radius: 10%;
  list-style: none;
  overflow: hidden scroll;

  @media (min-width: 20rem) {
    gap: 1rem;
    margin-top: 2rem;
  }

  @media (min-width: 22.5rem) {
    gap: 1.3rem;
  }

  @media (min-width: 25rem) {
    gap: 1.5rem;
    margin: 3rem 0 -1rem 0;
  }

  @media (min-width: 48rem) {
    gap: 2.5rem;
    margin-bottom: -2rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    gap: 2rem;
    margin-top: 1rem;
  }

  @media (min-width: 90rem) {
    gap: 2.5rem;
  }

  @media (min-width: 120rem) {
    margin-top: 3rem;
    margin-bottom: -3rem;
  }

  @media (min-width: 160rem) {
    margin-top: 2rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    gap: 3rem;
    margin-top: 3rem;
  }

  @media (min-width: 240rem) {
    gap: 4rem;
    margin-top: 5rem;
  }
`;

export const Category = styled.li`
  width: 90%;
  display: flex;
  padding: 1rem;
  border-radius: 15px;
  background-color: #eaeaea;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  :last-child {
    margin-bottom: 1rem;
  }
`;

export const CategoryLogo = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 3rem;
  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  img {
    width: 75%;
    height: 75%;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    width: 13%;
  }

  @media (min-width: 90rem) {
    width: 11%;
    margin-right: 4rem;
  }

  @media (min-width: 160rem) {
    width: 10%;
    margin-left: 1rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    width: 12%;
  }

  @media (min-width: 240rem) {
    width: 11%;
    margin: 1rem 5rem 1rem 1rem;
  }
`;

export const CategoryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 20rem) {
    gap: 0.3rem;
  }

  @media (min-width: 48rem) {
    gap: 0.7rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    gap: 1.2rem;
  }

  @media (min-width: 120rem) {
    gap: 1.5rem;
  }

  @media (min-width: 240rem) {
    gap: 2.2rem;
  }
`;

export const CategoryName = styled.h2`
  font-size: 2.2rem;

  @media (min-width: 20rem) {
    font-size: 1.8rem;
  }

  @media (min-width: 22.5rem) {
    font-size: 2rem;
  }

  @media (min-width: 25rem) {
    font-size: 2rem;
  }

  @media (min-width: 48rem) {
    font-size: 3rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 3.2rem;
  }

  @media (min-width: 120rem) {
    font-size: 3.8rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    font-size: 4.2rem;
  }

  @media (min-width: 240rem) {
    font-size: 6rem;
  }
`;

export const CategoryPrice = styled.h3`
  font-size: 1.6rem;

  @media (min-width: 20rem) {
    font-size: 1.3rem;
  }

  @media (min-width: 22.5rem) {
    font-size: 1.4rem;
  }

  @media (min-width: 25rem) {
    font-size: 1.4rem;
  }

  @media (min-width: 48rem) {
    font-size: 2.2rem;
  }

  @media (min-width: 64rem) and (orientation: landscape) {
    font-size: 2.4rem;
  }

  @media (min-width: 120rem) {
    font-size: 3rem;
  }

  @media (min-width: 160rem) and (min-height: 90rem) {
    font-size: 3.2rem;
  }

  @media (min-width: 240rem) {
    font-size: 4.2rem;
  }
`;
