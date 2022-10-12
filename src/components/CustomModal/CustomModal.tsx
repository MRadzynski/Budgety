import Overlay from '../Overlay/Overlay';
import {
  CustomModalButton,
  CustomModalContainer,
  CustomModalExit,
  CustomModalTitle
} from './CustomModal.styles';

interface CustomModalProps {
  children: JSX.Element | string;
  confirmFunction: () => void;
  large?: boolean;
  open: boolean;
  overlayRadius?: boolean;
  setOpen: (state: boolean) => void;
}

const CustomModal = ({
  children,
  confirmFunction,
  large,
  open,
  overlayRadius,
  setOpen
}: CustomModalProps) => {
  const handleExit = () => setOpen(false);

  return (
    <Overlay open={open} overlayRadius={overlayRadius} setOpen={setOpen}>
      <CustomModalContainer large={large} open={open}>
        <CustomModalExit onClick={handleExit}>&#10005;</CustomModalExit>
        <CustomModalTitle>{children}</CustomModalTitle>
        <CustomModalButton large={large} onClick={confirmFunction}>
          Confirm
        </CustomModalButton>
      </CustomModalContainer>
    </Overlay>
  );
};

export default CustomModal;
