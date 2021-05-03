import styled from 'styled-components';

export const CategoriesListContainer = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 44);
  display: flex;
  flex-direction: column;
`;

export const CategoryList = styled.ul`
  list-style: none;
  margin-top: 3rem;
  padding: 0rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden scroll;
  border-radius: 10%;
`;

export const Category = styled.li`
  display: flex;
  width: 90%;
  padding: 1rem;
  background-color: #eaeaea;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  :last-child {
    margin-bottom: 1rem;
  }
`;

export const CategoryLogo = styled.div`
  width: 15%;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 3rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  img {
    width: 75%;
    height: 75%;
  }
`;

export const CategoryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const CategoryName = styled.h2`
  font-size: 2.2rem;
`;

export const CategoryPrice = styled.h3`
  font-size: 1.6rem;
`;
