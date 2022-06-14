import { render, screen } from '../../testsWrapper';
import HomePage from './homepage.component';
import { Provider } from 'react-redux';
import { render as rtl } from '@testing-library/react';
import { createStore } from 'redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

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
    // jest.mock('./homepage.component', () => ({
    //   mapStateToProps: () => ({
    //     displayName: 'Visitor'
    //   })
    // }));
    const store = mockStore({
      user: {
        currentUser: {
          displayName: 'Visitor'
        }
      }
    });
    rtl(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
    // const utils = render(<HomePage />, { initialState: initialState });
    const welcomeText = screen.getByText('Hey Visitor!');

    expect(welcomeText).toBeInTheDocument();
  });
});
