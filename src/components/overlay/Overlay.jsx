import React, { useRef } from 'react';
import { OverlayContainer } from './Overlay.styles';

const Overlay = ({
  children,
  className,
  open,
  overlayRadius,
  setError = null,
  setInput = null,
  setOpen
}) => {
  const overlayRef = useRef();

  const handleClick = e => {
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
