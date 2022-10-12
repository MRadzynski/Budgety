import Overlay from '../Overlay/Overlay';
import {
  CustomPopupContainer,
  CustomPopupText,
  ExitPopup
} from './CustomPopup.styles';

interface CustomPopupProps {
  children: string;
  open: boolean;
  setError: (text: string) => void;
  setOpen: (a: boolean) => void;
}

const CustomPopup = ({
  children,
  open,
  setError,
  setOpen
}: CustomPopupProps) => (
  <Overlay open={open} setError={setError} setOpen={setOpen}>
    <CustomPopupContainer open={open}>
      <ExitPopup onClick={() => setOpen(false)}>&#10005;</ExitPopup>
      <CustomPopupText>{children || 'Something went wrong!'}</CustomPopupText>
    </CustomPopupContainer>
  </Overlay>
);

export default CustomPopup;
