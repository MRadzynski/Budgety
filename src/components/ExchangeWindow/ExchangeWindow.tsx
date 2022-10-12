import Spinner from '../Spinner/Spinner';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  CurrencyName,
  CurrencyRate,
  DateInfo,
  ExchangeList,
  ExchangeListItem,
  ExchangeWindowContainer
} from './ExchangeWindow.styles';
import { formatNumber } from '../../redux/finance/finance.utils';
import {
  selectBalance,
  selectCurrency,
  selectLatestBalance
} from '../../redux/finance/finance.selectors';

interface CurrenciesData {
  amount: number;
  base: string;
  date: string;
  rates: RatesData;
}

interface ExchangeWindowProps {
  balance: number;
  currency: string;
  latestBalance: number;
  type: string;
}

interface RatesData {
  AUD: number;
  BGN: number;
  BRL: number;
  CAD: number;
  CHF: number;
  CNY: number;
  CZK: number;
  DKK: number;
  EUR: number;
  GBP: number;
  HKD: number;
  HRK: number;
  HUF: number;
  IDR: number;
  ILS: number;
  INR: number;
  ISK: number;
  JPY: number;
  KRW: number;
  MXN: number;
  MYR: number;
  NOK: number;
  NZD: number;
  PHP: number;
  PLN: number;
  RON: number;
  SEK: number;
  SGD: number;
  THB: number;
  TRY: number;
  ZAR: number;
}

interface ReduxStore {
  balance: number;
  currency: string;
  latestBalance: number;
}

type CurrenciesDataTuple = [number, string, string, RatesData];

type RatesTuple = [string, number];

const ExchangeWindow = ({
  balance,
  currency,
  latestBalance,
  type
}: ExchangeWindowProps) => {
  const [date, setDate] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [rates, setRates] = useState<RatesTuple[]>([]);

  const selectedBalance = type === 'monthly' ? latestBalance : balance;

  useEffect(() => {
    const fetchCurrencies = async () => {
      const currenciesRes = await fetch(
        `https://api.frankfurter.app/latest?from=${currency}`
      );
      const currenciesData: CurrenciesData = await currenciesRes.json();
      const currenciesDataArray = Object.entries(currenciesData).map(
        field => field[1]
      ) as CurrenciesDataTuple;

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
                <CurrencyRate
                  length={formatNumber(selectedBalance * rate[1]).length}
                >
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

const mapStateToProps = (state: ReduxStore) => ({
  currency: selectCurrency(state),
  balance: selectBalance(state),
  latestBalance: selectLatestBalance(state)
});

export default connect(mapStateToProps)(ExchangeWindow);
