import React from 'react';

import CURRENCIES_NAME from '../../currencies.names';

import { CurrenciesList, CurrenciesListItem } from './currencies-names.styles';

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
