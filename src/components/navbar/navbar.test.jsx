import Navbar from './Navbar';
import { render } from '../../utils/testsWrapper';

describe('navbar.jsx', () => {
  it('renders', () => {
    const { container } = render(<Navbar />);

    expect(container).toBeInTheDocument();
  });
});
