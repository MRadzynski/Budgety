import React from 'react';

import CATEGORIES_DATA from '../../categories.data.js';

import {
  CategoriesListContainer,
  CategoryList,
  Category,
  CategoryLogo,
  CategoryInfoContainer,
  CategoryName,
  CategoryPrice,
} from './categories-list.styles';

const CategoriesList = () => {
  let categoriesData = Object.entries(CATEGORIES_DATA).map((item) => item[1]);

  return (
    <CategoriesListContainer>
      <CategoryList>
        {categoriesData.map((categoryData) => (
          <Category key={categoryData.id}>
            <CategoryLogo bgColor={categoryData.bgColor}>
              <img
                src={categoryData.image}
                alt={categoryData.title + ' icon'}
              />
            </CategoryLogo>
            <CategoryInfoContainer>
              <CategoryName>{categoryData.title}</CategoryName>
              <CategoryPrice>
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(categoryData.amount)}
              </CategoryPrice>
            </CategoryInfoContainer>
          </Category>
        ))}
      </CategoryList>
    </CategoriesListContainer>
  );
};

export default CategoriesList;
