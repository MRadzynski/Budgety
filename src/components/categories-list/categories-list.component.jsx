import React from 'react';

import { formatCurrency } from '../../redux/finance/finance.utils';

import Spinner from '../spinner/spinner.component';

import {
  CategoriesListContainer,
  CategoryList,
  Category,
  CategoryLogo,
  CategoryInfoContainer,
  CategoryName,
  CategoryPrice,
} from './categories-list.styles';

const CategoriesList = ({ categoriesData, currency }) => {
  if (categoriesData === null) return <Spinner />;
  return (
    <CategoriesListContainer>
      <CategoryList>
        {categoriesData?.map((categoryData) => (
          <Category key={categoryData.id}>
            <CategoryLogo bgColor={categoryData.bgColor}>
              <img
                src={`assets/icons/${categoryData.category.toLowerCase()}.svg`}
                alt={categoryData.category + ' icon'}
              />
            </CategoryLogo>
            <CategoryInfoContainer>
              <CategoryName>{categoryData.category}</CategoryName>
              <CategoryPrice>
                {formatCurrency(categoryData.amount, currency)}
              </CategoryPrice>
            </CategoryInfoContainer>
          </Category>
        ))}
      </CategoryList>
    </CategoriesListContainer>
  );
};

export default CategoriesList;
