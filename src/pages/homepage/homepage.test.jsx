import { render, screen } from '../../testsWrapper';
import HomePage from './homepage.component';

jest.mock('../../hooks/useHistoryChart', () => {
  return jest.fn(() => null);
});

describe('Homepage.jsx', () => {
  it('should render the homepage', () => {
    const { container } = render(<HomePage />);

    expect(container).toBeInTheDocument();
  });

  it('should render "Hey !" as a welcome text if no displayName is provided', () => {
    render(<HomePage />);

    const welcomeText = screen.getByText('Hey !');

    expect(welcomeText).toBeInTheDocument();
  });

  it('should render personalized welcome text if displayName is provided', () => {
    render(<HomePage />, {
      initialState: {
        user: {
          currentUser: {
            displayName: 'Visitor'
          }
        }
      }
    });
    const welcomeText = screen.getByText('Hey Visitor!');

    expect(welcomeText).toBeInTheDocument();
  });
});
