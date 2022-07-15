import SignUp from './SignUp';
import { render } from '../../utils/testsWrapper';

describe('sign-up.jsx', () => {
  it('renders Sign Up page', () => {
    const { container } = render(<SignUp />);

    expect(container).toBeInTheDocument();
  });
});
