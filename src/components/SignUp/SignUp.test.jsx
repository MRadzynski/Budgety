import { render } from '../../utils/testsWrapper';
import SignUp from './SignUp';

describe('sign-up.jsx', () => {
  it('renders Sign Up page', () => {
    const { container } = render(<SignUp />);

    expect(container).toBeInTheDocument();
  });
});
