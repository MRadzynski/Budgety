import { render } from '../../testsWrapper';
import Hamburger from './hamburger.component';

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
