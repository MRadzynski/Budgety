import { render } from '../../testsWrapper';
import SignUp from './sign-up.component';

describe('sign-up.jsx', () => {
  it('renders Sign Up page', () => {
    const { container } = render(<SignUp />);

    expect(container).toBeInTheDocument();
  });
});
