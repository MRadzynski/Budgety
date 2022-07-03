import { render, screen } from './testsWrapper';
import App from './App';

describe('App.js', () => {
  it('renders app', () => {
    const { container } = render(<App />);

    expect(container).toBeInTheDocument();
  });

  it('renders app name', () => {
    render(<App />);

    const appName = screen.getByText(/Budgety/i);

    expect(appName).toBeInTheDocument();
  });

  it('renders app logo', () => {
    render(<App />);

    const appLogo = screen.getByAltText('Budgety logo');

    expect(appLogo).toBeInTheDocument();
  });
});
