import Hamburger from './Hamburger';
import { render } from '../../utils/testsWrapper';

describe('hamburger.jsx', () => {
  it('renders closed hamburger', () => {
    const { container } = render(<Hamburger open={false} />);

    expect(container).toBeInTheDocument();
  });

  it('renders opened hamburger', () => {
    const { container } = render(<Hamburger open />);

    expect(container).toBeInTheDocument();
  });
});
