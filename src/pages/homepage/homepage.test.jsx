import { render, screen, within } from '../../utils/testsWrapper';
import HomePage from './HomePage';

jest.mock('../../hooks/useHistoryChart', () => {
  return jest.fn(() => null);
});

describe('homepage.jsx', () => {
  it('renders the homepage', () => {
    const { container } = render(<HomePage />);

    expect(container).toBeInTheDocument();
  });

  it('renders "Hey !" as a welcome text if no displayName is provided', () => {
    render(<HomePage />);

    const welcomeText = screen.getByText('Hey !');

    expect(welcomeText).toBeInTheDocument();
  });

  it('renders personalized welcome text if displayName is provided', () => {
    const initialState = {
      user: {
        currentUser: {
          displayName: 'Visitor'
        }
      }
    };

    render(<HomePage />, {
      initialState
    });

    const welcomeText = screen.getByText('Hey Visitor!');

    expect(welcomeText).toBeInTheDocument();
  });

  it('displays "No data to present 😔" if there is no monthly expenses', () => {
    render(<HomePage />);

    const expensesContainer = screen.getByTestId('expensesContainer');
    const expensesMessage = within(expensesContainer).getByText(
      'No data to present 😔'
    );

    expect(expensesMessage).toBeInTheDocument();
  });

  it('displays "No data to present 😔" if there is no monthly income', () => {
    render(<HomePage />);

    const incomeContainer = screen.getByTestId('incomeContainer');
    const incomeMessage = within(incomeContainer).getByText(
      'No data to present 😔'
    );

    expect(incomeMessage).toBeInTheDocument();
  });

  it('displays "No data to present 😔" if there is no monthly balance', () => {
    render(<HomePage />);

    const balanceContainer = screen.getByTestId('balanceContainer');
    const balanceMessage = within(balanceContainer).getByText(
      'No data to present 😔'
    );

    expect(balanceMessage).toBeInTheDocument();
  });

  it('displays balance as $0.00 when there is no monthly balance and user has default currency', () => {
    render(<HomePage />);

    const balanceContainer = screen.getByTestId('balanceContainer');
    const balanceValue = within(balanceContainer).getByText('Balance: $0.00');

    expect(balanceValue).toBeInTheDocument();
  });

  it('displays balance as ¥0.00 when there is no monthly balance and user has set currency to ¥', () => {
    const initialState = {
      finance: {
        currency: 'JPY'
      }
    };

    render(<HomePage />, { initialState });

    const balanceValue = screen.getByText('Balance: ¥0.00');

    expect(balanceValue).toBeInTheDocument();
  });
});
