import { render } from '../../utils/testsWrapper';
import Spinner from './Spinner';

describe('spinner.jsx', () => {
  it('renders Spinner component', () => {
    const { container } = render(<Spinner />);

    expect(container).toBeInTheDocument();
  });
});
