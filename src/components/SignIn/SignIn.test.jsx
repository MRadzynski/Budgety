import { render } from '../../utils/testsWrapper';
import SignIn from './SignIn';

describe('sign-in.jsx', () => {
  it('renders Sign In page', () => {
    const { container } = render(<SignIn />);

    expect(container).toBeInTheDocument();
  });
});
