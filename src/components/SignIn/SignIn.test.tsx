import SignIn from './SignIn';
import { render } from '../../utils/testsWrapper';

describe('sign-in.jsx', () => {
  it('renders Sign In page', () => {
    const { container } = render(<SignIn />);

    expect(container).toBeInTheDocument();
  });
});
