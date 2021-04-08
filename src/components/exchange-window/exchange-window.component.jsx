import React, { useEffect, useState } from 'react';

import {
  ExchangeWindowContainer,
  ExchangeList,
  ExchangeListItem,
  CurrencyRate,
  CurrencyName,
  DateInfo,
} from './exchange-window.styles';

const ExchangeWindow = () => {
  const [rates, setRates] = useState([]);
  const [date, setDate] = useState(null);

  useEffect(() => {
    const fetchCurrencies = async () => {
      const currenciesRes = await fetch(
        'https://api.frankfurter.app/latest?from=USD'
      );
      const currenciesData = await currenciesRes.json();
      let currenciesDataArray = Object.entries(currenciesData).map(
        (field) => field[1]
      );
      setDate(currenciesDataArray[2]);
      setRates(Object.entries(currenciesDataArray[3]));
    };
    fetchCurrencies();
  }, []);

  return (
    <ExchangeWindowContainer>
      <ExchangeList>
        {rates.map((rate, i) => (
          <ExchangeListItem key={i}>
            <CurrencyName>{rate[0]}</CurrencyName>
            <CurrencyRate>{rate[1].toFixed(2)}</CurrencyRate>
          </ExchangeListItem>
        ))}
      </ExchangeList>
      <DateInfo>Last Update: {date}</DateInfo>
    </ExchangeWindowContainer>
  );
};

export default ExchangeWindow;
