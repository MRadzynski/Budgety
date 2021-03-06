import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import {
  selectBalance,
  selectCurrency,
} from '../../redux/finance/finance.selectors';

import { formatNumber } from '../../redux/finance/finance.utils';

import Spinner from '../spinner/spinner.component';

import {
  ExchangeWindowContainer,
  ExchangeList,
  ExchangeListItem,
  CurrencyRate,
  CurrencyName,
  DateInfo,
} from './exchange-window.styles';

const ExchangeWindow = ({ currency, balance }) => {
  const [rates, setRates] = useState([]);
  const [date, setDate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrencies = async () => {
      const currenciesRes = await fetch(
        `https://api.frankfurter.app/latest?from=${currency}`
      );
      const currenciesData = await currenciesRes.json();
      const currenciesDataArray = Object.entries(currenciesData).map(
        (field) => field[1]
      );
      setDate(currenciesDataArray[2]);
      setRates(Object.entries(currenciesDataArray[3]));
      setLoading(false);
    };
    fetchCurrencies();

    return () => {
      setDate(null);
      setRates([]);
    };
  }, [currency]);

  return (
    <ExchangeWindowContainer>
      <ExchangeList>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <ExchangeListItem key={balance}>
              <CurrencyName>{currency}</CurrencyName>
              <CurrencyRate>{formatNumber(balance)}</CurrencyRate>
            </ExchangeListItem>
            {rates.map((rate, i) => (
              <ExchangeListItem key={i}>
                <CurrencyName>{rate[0]}</CurrencyName>
                <CurrencyRate length={formatNumber(balance * rate[1]).length}>
                  {formatNumber(balance * rate[1])}
                </CurrencyRate>
              </ExchangeListItem>
            ))}
          </>
        )}
      </ExchangeList>
      <DateInfo>Last Update: {date}</DateInfo>
    </ExchangeWindowContainer>
  );
};

const mapStateToProps = (state) => ({
  currency: selectCurrency(state),
  balance: selectBalance(state),
});

export default connect(mapStateToProps)(ExchangeWindow);
