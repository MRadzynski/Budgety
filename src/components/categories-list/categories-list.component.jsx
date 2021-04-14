import React from 'react';

import { formatCurrency } from '../../redux/finance/finance.utils';

import {
  CategoriesListContainer,
  CategoryList,
  Category,
  CategoryLogo,
  CategoryInfoContainer,
  CategoryName,
  CategoryPrice,
} from './categories-list.styles';

const CategoriesList = ({ categoriesData }) => {
  if (categoriesData === null) return <h1>Loading...</h1>;
  return (
    <CategoriesListContainer>
      <CategoryList>
        {categoriesData.map((categoryData) => (
          <Category key={categoryData.id}>
            <CategoryLogo bgColor={categoryData.bgColor}>
              <img
                src={`assets/icons/${categoryData.category.toLowerCase()}.png`}
                alt={categoryData.category + ' icon'}
              />
            </CategoryLogo>
            <CategoryInfoContainer>
              <CategoryName>{categoryData.category}</CategoryName>
              <CategoryPrice>
                {formatCurrency(categoryData.amount)}
              </CategoryPrice>
            </CategoryInfoContainer>
          </Category>
        ))}
      </CategoryList>
    </CategoriesListContainer>
  );
};

export default CategoriesList;
