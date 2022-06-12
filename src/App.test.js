import { render, screen } from './testsWrapper';
import App from './App';

describe('App.js', () => {
  it('renders app name', () => {
    render(<App />);

    const appName = screen.getByText(/Budgety/i);

    expect(appName).toBeInTheDocument();
  });
});
