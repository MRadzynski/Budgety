import Spinner from './Spinner';
import { render } from '../../utils/testsWrapper';

describe('spinner.jsx', () => {
  it('renders Spinner component', () => {
    const { container } = render(<Spinner />);

    expect(container).toBeInTheDocument();
  });
});
