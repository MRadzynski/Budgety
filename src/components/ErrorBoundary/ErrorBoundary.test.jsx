import { render, screen } from '../../utils/testsWrapper';
import ErrorBoundary from './ErrorBoundary';

describe('error-boundaries.jsx', () => {
  it('throws an error when error happen inside Error Boundaries', () => {
    console.error = jest.fn();

    const Throws = () => {
      throw new Error();
    };

    render(
      <ErrorBoundary>
        <Throws />
      </ErrorBoundary>
    );

    const errorMessage = screen.getByText('Sorry page is broken!');

    expect(errorMessage).toBeInTheDocument();
  });
});
