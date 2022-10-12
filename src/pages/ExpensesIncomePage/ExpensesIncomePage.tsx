import Chart from '../../components/Chart/Chart';
import ExpensesIncomeDetails from '../../components/ExpensesIncomeDetails/ExpensesIncomeDetails';
import Spinner from '../../components/Spinner/Spinner';
import {
  ChartContainer,
  ChartPrice,
  ExpensesIncomePageContainer,
  ExpensesIncomeTitle
} from './ExpensesIncomePage.styles';
import { connect } from 'react-redux';
import { ExpensesIncomeWithoutPercentData } from '../../utils/interfaces';
import { formatCurrency } from '../../redux/finance/finance.utils';
import {
  selectCurrency,
  selectLatestExpenses,
  selectLatestExpensesTotal,
  selectLatestIncome,
  selectLatestIncomeTotal
} from '../../redux/finance/finance.selectors';
import { useLocation } from 'react-router-dom';

interface ExpensesIncomePageProps {
  currency: string;
  latestExpenses: ExpensesIncomeWithoutPercentData[];
  latestExpensesTotal: number;
  latestIncome: ExpensesIncomeWithoutPercentData[];
  latestIncomeTotal: number;
}

const ExpensesIncomePage = ({
  currency,
  latestExpenses,
  latestExpensesTotal,
  latestIncome,
  latestIncomeTotal
}: ExpensesIncomePageProps) => {
  const { pathname } = useLocation();

  return (
    <ExpensesIncomePageContainer>
      <ExpensesIncomeTitle>
        {pathname.includes('/expenses') ? 'Expenses' : 'Income'}
      </ExpensesIncomeTitle>
      {pathname.includes('/expenses') ? (
        <ChartContainer>
          <Chart data={latestExpenses} />
          {latestExpensesTotal === undefined ? (
            <Spinner />
          ) : (
            <ChartPrice>
              {formatCurrency(latestExpensesTotal, currency)}
            </ChartPrice>
          )}
        </ChartContainer>
      ) : (
        <ChartContainer>
          <Chart data={latestIncome} />
          {latestIncomeTotal === undefined ? (
            <Spinner />
          ) : (
            <ChartPrice>
              {formatCurrency(latestIncomeTotal, currency)}
            </ChartPrice>
          )}
        </ChartContainer>
      )}
      <ExpensesIncomeDetails currentPath={pathname} />
    </ExpensesIncomePageContainer>
  );
};

const mapStateToProps = (state: ExpensesIncomePageProps) => ({
  currency: selectCurrency(state),
  latestExpenses: selectLatestExpenses(state),
  latestExpensesTotal: selectLatestExpensesTotal(state),
  latestIncome: selectLatestIncome(state),
  latestIncomeTotal: selectLatestIncomeTotal(state)
});

export default connect(mapStateToProps)(ExpensesIncomePage);
