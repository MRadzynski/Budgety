import React, { useState } from 'react';

import ExchangeWindow from '../../components/ExchangeWindow/ExchangeWindow';

import {
  ExchangeContainer,
  ExchangeTitle,
  ExchangeSubTitle,
  ExchangeButtonsContainer,
  ExchangeButton
} from './ExchangePage.styles';

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
        <ExchangeButton onClick={handleClickMonthly}>
          Current Month
        </ExchangeButton>
        <ExchangeButton onClick={handleClickAllTime}>All Time</ExchangeButton>
      </ExchangeButtonsContainer>
    </ExchangeContainer>
  );
};

export default ExchangePage;
