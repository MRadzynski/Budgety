import { render, screen } from '../../testsWrapper';
import ErrorBoundary from './error-boundary.component';

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
