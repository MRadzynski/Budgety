import React from 'react';

import CURRENCIES_NAME from '../../data/currencies.names.json';

import {
  CurrenciesList,
  CurrenciesListItem
} from './CurrenciesNamesList.styles';

const CurrenciesNamesList = ({ open, chooseCurrencyFunction }) => (
  <CurrenciesList open={open}>
    {CURRENCIES_NAME.map((currencyName, index) => (
      <CurrenciesListItem
        key={index}
        value={currencyName}
        onClick={chooseCurrencyFunction}
      >
        {currencyName}
      </CurrenciesListItem>
    ))}
  </CurrenciesList>
);

export default CurrenciesNamesList;
