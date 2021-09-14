import React from 'react';

import HistoryList from '../../components/history-list/history-list.component'

import { HistoryPageContainer, HistoryTitle, HistorySubtitle } from './history.styles'

const HistoryPage = () => {

  return (
    <HistoryPageContainer>
      <HistoryTitle>
        History
      </HistoryTitle>
      <HistorySubtitle>
        Summary of your previous months
      </HistorySubtitle>
      <HistoryList />
    </HistoryPageContainer>
  )
}

export default HistoryPage;