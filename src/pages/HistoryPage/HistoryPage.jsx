import React from 'react';

import HistoryList from '../../components/HistoryList/HistoryList';

import {
  HistoryPageContainer,
  HistoryTitle,
  HistorySubtitle
} from './HistoryPage.styles';

const HistoryPage = () => {
  return (
    <HistoryPageContainer>
      <HistoryTitle>History</HistoryTitle>
      <HistorySubtitle>Summary of your previous months</HistorySubtitle>
      <HistoryList />
    </HistoryPageContainer>
  );
};

export default HistoryPage;
