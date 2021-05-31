import React from 'react';

import ExchangeWindow from '../../components/exchange-window/exchange-window.component';

import {
  ExchangeContainer,
  ExchangeTitle,
  ExchangeSubTitle,
} from './exchange.styles';

const ExchangePage = () => (
  <ExchangeContainer>
    <ExchangeTitle>Exchange</ExchangeTitle>
    <ExchangeSubTitle>
      Check your balance in different currencies
    </ExchangeSubTitle>
    <ExchangeWindow />
  </ExchangeContainer>
);

export default ExchangePage;
