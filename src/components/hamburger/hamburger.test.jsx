import { render } from '../../utils/testsWrapper';
import Hamburger from './Hamburger';

describe('hamburger.jsx', () => {
  it('renders closed hamburger', () => {
    const { container } = render(<Hamburger />);

    expect(container).toBeInTheDocument();
  });

  it('renders opened hamburger', () => {
    const { container } = render(<Hamburger open />);

    expect(container).toBeInTheDocument();
  });
});
