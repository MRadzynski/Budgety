import CURRENCIES_NAME from '../../data/currencies.names.json';
import React from 'react';
import {
  CurrenciesList,
  CurrenciesListItem
} from './CurrenciesNamesList.styles';

const CurrenciesNamesList = ({ chooseCurrencyFunction, open }) => (
  <CurrenciesList open={open}>
    {CURRENCIES_NAME.map((currencyName, index) => (
      <CurrenciesListItem
        key={index}
        onClick={chooseCurrencyFunction}
        value={currencyName}
      >
        {currencyName}
      </CurrenciesListItem>
    ))}
  </CurrenciesList>
);

export default CurrenciesNamesList;
