import { render } from '../../testsWrapper';
import Navbar from './navbar.component';

describe('navbar.jsx', () => {
  it('renders', () => {
    const { container } = render(<Navbar />);

    expect(container).toBeInTheDocument();
  });
});
