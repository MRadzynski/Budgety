import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import {
  selectBalance,
  selectCurrency,
  selectLatestBalance,
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

const ExchangeWindow = ({ type, currency, balance, latestBalance }) => {
  const selectedBalance = type === 'monthly' ? latestBalance : balance;
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
            <ExchangeListItem key={selectedBalance}>
              <CurrencyName>{currency}</CurrencyName>
              <CurrencyRate>{formatNumber(selectedBalance)}</CurrencyRate>
            </ExchangeListItem>
            {rates.map((rate, i) => (
              <ExchangeListItem key={i}>
                <CurrencyName>{rate[0]}</CurrencyName>
                <CurrencyRate length={formatNumber(selectedBalance * rate[1]).length}>
                  {formatNumber(selectedBalance * rate[1])}
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
  latestBalance: selectLatestBalance(state)
});

export default connect(mapStateToProps)(ExchangeWindow);
