import { fireEvent, render, screen, within } from '../../utils/testsWrapper';
import NotFound from './NotFound';

describe('notFound.jsx', () => {
  it(`should display a dog image`, () => {
    render(<NotFound />);

    const dogImg = screen.getByAltText('Dog eating paper');

    expect(dogImg).toBeInTheDocument();
  });

  it(`should display 'A Dog Ate this Page' text`, () => {
    render(<NotFound />);

    const titleText = screen.getByText('A Dog Ate this Page');

    expect(titleText).toBeInTheDocument();
  });

  it(`should display 'Go to Sign In!' button text when user is not logged in`, () => {
    render(<NotFound />);

    const button = screen.getByRole('button');
    const buttonText = within(button).getByText('Go Sign In!');

    expect(buttonText).toBeInTheDocument();
  });

  it(`should display 'Go Home!' button text when user is logged in`, () => {
    const initialState = {
      user: {
        currentUser: {}
      }
    };

    render(<NotFound />, { initialState });

    const button = screen.getByRole('button');
    const buttonText = within(button).getByText('Go Home!');

    expect(buttonText).toBeInTheDocument();
  });

  it('should redirect the user to the "/signin", when the user is not logged in', () => {
    render(<NotFound />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(window.location.pathname).toBe('/signin');
  });

  it('should redirect the user to the "/", when the user is logged in', () => {
    const initialState = {
      user: {
        currentUser: {}
      }
    };

    render(<NotFound />, { initialState });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(window.location.pathname).toBe('/');
  });
});
