import React, { useState } from 'react';

import ExchangeWindow from '../../components/exchange-window/exchange-window.component';

import {
  ExchangeContainer,
  ExchangeTitle,
  ExchangeSubTitle,
  ExchangeButtonsContainer,
  ExchangeButton
} from './exchange.styles';

const ExchangePage = () => {
  const [type, setType] = useState('monthly');

  const handleClickMonthly = () => setType('monthly');
  const handleClickAllTime = () => setType('allTime');

  return (
    <ExchangeContainer>
      <ExchangeTitle>Exchange</ExchangeTitle>
      <ExchangeSubTitle>
        Check your balance in different currencies
      </ExchangeSubTitle>
      <ExchangeWindow type={type} />
      <ExchangeButtonsContainer>
        <ExchangeButton onClick={handleClickMonthly}>Current Month</ExchangeButton>
        <ExchangeButton onClick={handleClickAllTime}>All Time</ExchangeButton>
      </ExchangeButtonsContainer>
    </ExchangeContainer>
  )
};

export default ExchangePage;
