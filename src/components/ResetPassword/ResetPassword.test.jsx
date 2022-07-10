import { render } from '../../utils/testsWrapper';
import ResetPassword from './ResetPassword';

describe('reset-password.jsx', () => {
  it('renders ResetPassword component', () => {
    const { container } = render(<ResetPassword />);

    expect(container).toBeInTheDocument();
  });
});
