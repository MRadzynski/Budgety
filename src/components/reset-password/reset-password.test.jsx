import { render } from '../../testsWrapper';
import ResetPassword from './reset-password.component';

describe('reset-password.jsx', () => {
  it('renders ResetPassword component', () => {
    const { container } = render(<ResetPassword />);

    expect(container).toBeInTheDocument();
  });
});
