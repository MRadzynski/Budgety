import ResetPassword from './ResetPassword';
import { render } from '../../utils/testsWrapper';

describe('reset-password.jsx', () => {
  it('renders ResetPassword component', () => {
    const { container } = render(<ResetPassword />);

    expect(container).toBeInTheDocument();
  });
});
