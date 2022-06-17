import { render } from '../../testsWrapper';
import SignIn from './sign-in.component';

describe('sign-in.jsx', () => {
  it('renders Sign In page', () => {
    const { container } = render(<SignIn />);

    expect(container).toBeInTheDocument();
  });
});
