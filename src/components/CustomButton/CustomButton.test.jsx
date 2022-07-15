import CustomButton from './CustomButton';
import { render, screen } from '../../utils/testsWrapper';

describe('custom-button.jsx', () => {
  it('renders CustomButton component', () => {
    const { container } = render(<CustomButton />);

    expect(container).toBeInTheDocument();
  });

  it('displays CustomButton with different color if bgColor prop is provided', () => {
    const CUSTOM_COLOR = 'red';
    render(<CustomButton bgColor={CUSTOM_COLOR} />);

    const customButton = screen.getByRole('button');

    expect(customButton).toHaveStyle(`background-color: ${CUSTOM_COLOR}`);
  });

  it('displays CustomButton with different text color if textColor prop is provided', () => {
    const CUSTOM_TEXT_COLOR = 'white';
    render(<CustomButton textColor={CUSTOM_TEXT_COLOR} />);

    const customButton = screen.getByRole('button');

    expect(customButton).toHaveStyle(`color: ${CUSTOM_TEXT_COLOR}`);
  });
});
