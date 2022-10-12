import HistoryList from '../../components/HistoryList/HistoryList';
import {
  HistoryPageContainer,
  HistorySubtitle,
  HistoryTitle
} from './HistoryPage.styles';

const HistoryPage = () => (
  <HistoryPageContainer>
    <HistoryTitle>History</HistoryTitle>
    <HistorySubtitle>Summary of your previous months</HistorySubtitle>
    <HistoryList />
  </HistoryPageContainer>
);

export default HistoryPage;
