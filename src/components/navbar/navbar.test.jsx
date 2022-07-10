import { render } from '../../utils/testsWrapper';
import Navbar from './Navbar';

describe('navbar.jsx', () => {
  it('renders', () => {
    const { container } = render(<Navbar />);

    expect(container).toBeInTheDocument();
  });
});
