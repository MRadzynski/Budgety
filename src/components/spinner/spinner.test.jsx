import { render } from '../../testsWrapper';
import Spinner from './spinner.component';

describe('spinner.jsx', () => {
  it('renders Spinner component', () => {
    const { container } = render(<Spinner />);

    expect(container).toBeInTheDocument();
  });
});
