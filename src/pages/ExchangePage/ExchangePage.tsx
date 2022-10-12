import ExchangeWindow from '../../components/ExchangeWindow/ExchangeWindow';
import { useState } from 'react';
import {
  ExchangeButton,
  ExchangeButtonsContainer,
  ExchangeContainer,
  ExchangeSubTitle,
  ExchangeTitle
} from './ExchangePage.styles';

const ExchangePage = () => {
  const [type, setType] = useState('monthly');

  const handleClickAllTime = () => setType('allTime');

  const handleClickMonthly = () => setType('monthly');

  return (
    <ExchangeContainer>
      <ExchangeTitle>Exchange</ExchangeTitle>
      <ExchangeSubTitle>
        Check your balance in different currencies
      </ExchangeSubTitle>
      <ExchangeWindow type={type} />
      <ExchangeButtonsContainer>
        <ExchangeButton onClick={handleClickMonthly}>
          Current Month
        </ExchangeButton>
        <ExchangeButton onClick={handleClickAllTime}>All Time</ExchangeButton>
      </ExchangeButtonsContainer>
    </ExchangeContainer>
  );
};

export default ExchangePage;
