import { render, screen } from '../../testsWrapper';
import CustomButton from './custom-button.component';

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
});
