import BalanceChart from '../../components/BalanceChart/BalanceChart';
import ExpensesIncomeBarchart from '../../components/ExpensesIncomeBarchart/ExpensesIncomeBarchart';
import {
  ChartContainer,
  ChartText,
  HomePageContainer,
  NoDataText,
  ScrollableChartContainer,
  WelcomeText
} from './HomePage.styles';
import { connect } from 'react-redux';
import { ExpensesIncomeData } from '../../utils/interfaces';
import { formatCurrency } from '../../redux/finance/finance.utils';
import {
  selectCurrency,
  selectLatestBalance,
  selectLatestExpensesIncomeArr,
  selectLatestExpensesPercent,
  selectLatestExpensesTotal,
  selectLatestIncomePercent,
  selectLatestIncomeTotal
} from '../../redux/finance/finance.selectors';
import { selectDisplayName } from '../../redux/user/user.selectors';
import { useHistoryChart } from '../../hooks/useHistoryChart';

interface HomePageProps {
  currency: string;
  displayName: string;
  latestBalance: number;
  latestExpensesIncomeArr: LatestExpensesIncomeData[];
  latestExpensesPercent: ExpensesIncomeData[];
  latestExpensesTotal: number;
  latestIncomePercent: ExpensesIncomeData[];
  latestIncomeTotal: number;
}

interface LatestExpensesIncomeData {
  amount: number;
  bgColor: string;
  name: string;
}

const HomePage = ({
  currency,
  displayName,
  latestBalance,
  latestExpensesIncomeArr,
  latestExpensesPercent,
  latestExpensesTotal,
  latestIncomePercent,
  latestIncomeTotal
}: HomePageProps) => {
  useHistoryChart();

  return (
    <HomePageContainer>
      <WelcomeText>Hey {displayName}! </WelcomeText>

      <ChartContainer data-testid="balanceContainer">
        {latestBalance !== null ? (
          <BalanceChart currency={currency} data={latestExpensesIncomeArr} />
        ) : (
          <NoDataText>No data to present 😔</NoDataText>
        )}
        <ChartText data-testid="balanceValue">
          Balance: {formatCurrency(latestBalance, currency)}
        </ChartText>
      </ChartContainer>

      <ChartContainer data-testid="expensesContainer">
        <ScrollableChartContainer>
          {latestExpensesTotal !== 0 ? (
            <ExpensesIncomeBarchart
              currency={currency}
              data={latestExpensesPercent}
            />
          ) : (
            <NoDataText>No data to present 😔</NoDataText>
          )}
        </ScrollableChartContainer>
        <ChartText>Expenses</ChartText>
      </ChartContainer>

      <ChartContainer data-testid="incomeContainer">
        <ScrollableChartContainer>
          {latestIncomeTotal !== 0 ? (
            <ExpensesIncomeBarchart
              currency={currency}
              data={latestIncomePercent}
            />
          ) : (
            <NoDataText>No data to present 😔</NoDataText>
          )}
        </ScrollableChartContainer>
        <ChartText>Income</ChartText>
      </ChartContainer>
    </HomePageContainer>
  );
};

const mapStateToProps = (state: HomePageProps) => ({
  currency: selectCurrency(state),
  displayName: selectDisplayName(state),
  latestBalance: selectLatestBalance(state),
  latestExpensesIncomeArr: selectLatestExpensesIncomeArr(state),
  latestExpensesPercent: selectLatestExpensesPercent(state),
  latestExpensesTotal: selectLatestExpensesTotal(state),
  latestIncomePercent: selectLatestIncomePercent(state),
  latestIncomeTotal: selectLatestIncomeTotal(state)
});

export default connect(mapStateToProps)(HomePage);
