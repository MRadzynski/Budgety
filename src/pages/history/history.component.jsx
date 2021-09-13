import React from 'react';

import HistoryList from '../../components/history-list/history-list.component'

import { HistoryPageContainer, HistoryTitle } from './history.styles'

const HistoryPage = () => {

  return (
    <HistoryPageContainer>
      <HistoryTitle>
        History
      </HistoryTitle>
      <HistoryList />
    </HistoryPageContainer>
  )
}

export default HistoryPage;