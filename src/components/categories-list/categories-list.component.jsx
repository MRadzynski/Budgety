import React from 'react';

import FoodIcon from '../../assets/food.png';

import {
  CategoriesListContainer,
  CategoryList,
  Category,
  CategoryLogo,
  CategoryInfoContainer,
  CategoryName,
  CategoryPrice,
} from './categories-list.styles';

const CategoriesList = () => (
  <CategoriesListContainer>
    <CategoryList>
      <Category>
        <CategoryLogo bgColor="#CDB4DB">
          <img src={FoodIcon} alt="Category icon" />
        </CategoryLogo>
        <CategoryInfoContainer>
          <CategoryName>Food</CategoryName>
          <CategoryPrice>$1.337.94</CategoryPrice>
        </CategoryInfoContainer>
      </Category>
      <Category>
        <CategoryLogo bgColor="#FFC8DD">
          <img src={FoodIcon} alt="Category icon" />
        </CategoryLogo>
        <CategoryInfoContainer>
          <CategoryName>Bills</CategoryName>
          <CategoryPrice>$12.767.83</CategoryPrice>
        </CategoryInfoContainer>
      </Category>
      <Category>
        <CategoryLogo bgColor="#BDE0FE">
          <img src={FoodIcon} alt="Category icon" />
        </CategoryLogo>
        <CategoryInfoContainer>
          <CategoryName>Health</CategoryName>
          <CategoryPrice>$682.56</CategoryPrice>
        </CategoryInfoContainer>
      </Category>
      <Category>
        <CategoryLogo bgColor="#BDE0FE">
          <img src={FoodIcon} alt="Category icon" />
        </CategoryLogo>
        <CategoryInfoContainer>
          <CategoryName>Health</CategoryName>
          <CategoryPrice>$682.56</CategoryPrice>
        </CategoryInfoContainer>
      </Category>
      <Category>
        <CategoryLogo bgColor="#BDE0FE">
          <img src={FoodIcon} alt="Category icon" />
        </CategoryLogo>
        <CategoryInfoContainer>
          <CategoryName>Health</CategoryName>
          <CategoryPrice>$682.56</CategoryPrice>
        </CategoryInfoContainer>
      </Category>
    </CategoryList>
  </CategoriesListContainer>
);

export default CategoriesList;
