import { fireEvent, render, screen, waitFor } from '../../testsWrapper';
import Menu from './menu.component';

const LINKS_HREFS = ['/', '/expenses', '/exchange', '/history', '/settings'];

const MENU_ITEMS = [
  'Home',
  'Expenses Income',
  'Exchange',
  'History',
  'Settings',
  'Log Out'
];

describe('menu.jsx', () => {
  it('renders the menu items', () => {
    render(<Menu open />);

    const menuItems = screen.getAllByRole('link');

    menuItems.forEach((el, index) =>
      expect(el.textContent).toBe(MENU_ITEMS[index])
    );
  });

  it('renders the menu items with correct hrefs', () => {
    render(<Menu open />);

    const menuItems = screen.getAllByRole('link');

    menuItems.forEach((el, index) => {
      if (index === 4) return;
      expect(el.getAttribute('href')).toBe(LINKS_HREFS[index]);
    });
  });

  it('logouts and redirects user to the signup page', async () => {
    render(<Menu open />);

    const logoutButton = screen.getByText('Log Out');
    fireEvent.click(logoutButton);

    await waitFor(() => expect(window.location.pathname).toBe('/signin'));
  });
});
