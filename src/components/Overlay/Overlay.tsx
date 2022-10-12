import React, { useRef } from 'react';
import { OverlayContainer } from './Overlay.styles';

interface OverlayProps {
  children: JSX.Element;
  className?: string;
  open: boolean;
  overlayRadius?: boolean;
  setError?: (text: string) => void;
  setInput?: (text: string) => void;
  setOpen: (state: boolean) => void;
}

const Overlay = ({
  children,
  className,
  open,
  overlayRadius,
  setError = undefined,
  setInput = undefined,
  setOpen
}: OverlayProps) => {
  const overlayRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const handleClick = (e: React.SyntheticEvent) => {
    if (overlayRef.current === e.target) {
      setOpen(false);
      if (setError) setError('');
      if (setInput) setInput('');
    }
  };

  return (
    <OverlayContainer
      className={className}
      onClick={handleClick}
      open={open}
      overlayRadius={overlayRadius}
      ref={overlayRef}
    >
      {children}
    </OverlayContainer>
  );
};

export default Overlay;
