import React from 'react';
import { useHistory, useLocation } from 'react-router';

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
  const history = useHistory();
  const location = useLocation();

  const handleClick = (e) => {
    const targetURL = e.target.closest('li').dataset.name;
    const originPathname = location.pathname;
    const pathname = `${originPathname}/add-${originPathname.slice(
      1
    )}/${targetURL}`;

    history.push(pathname);
  };

  if (categoriesData === null) return <Spinner />;
  return (
    <CategoriesListContainer>
      <CategoryList>
        {categoriesData?.map((categoryData) => (
          <Category
            key={categoryData.id}
            onClick={handleClick}
            data-name={categoryData.category}
          >
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
