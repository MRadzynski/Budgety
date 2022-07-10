import { render, screen } from '../../utils/testsWrapper';
import CurrenciesNamesList from './CurrenciesNamesList';
import CURRENCIES_NAME from '../../data/currencies.names.json';

describe('currencies-names-list.jsx', () => {
  it('should not display currencies list when open prop is not provided', () => {
    render(<CurrenciesNamesList />);

    const currenciesList = screen.getByRole('list', { hidden: true });

    expect(currenciesList).not.toBeVisible();
  });

  it('should display currencies list when open prop is provided', () => {
    render(<CurrenciesNamesList open />);

    const currenciesList = screen.getByRole('list', { hidden: true });

    expect(currenciesList).toBeVisible();
  });

  it('should display currencies list items when it is open', () => {
    const CURRENCIES_NAME_LENGTH = CURRENCIES_NAME.length;
    render(<CurrenciesNamesList open />);

    const currenciesListItems = screen.getAllByRole('listitem');

    expect(currenciesListItems.length).toBe(CURRENCIES_NAME_LENGTH);
  });
});
