import React, { useRef } from 'react';

import { OverlayContainer } from './overlay.styles';

const Overlay = ({
  open,
  setOpen,
  overlayRadius,
  children,
  className,
  setError = null,
  setInput = null,
}) => {
  const overlayRef = useRef();

  const handleClick = (e) => {
    if (overlayRef.current === e.target) {
      setOpen(false);
      if (setError) setError('');
      if (setInput) setInput('');
    }
  };

  return (
    <OverlayContainer className={className} ref={overlayRef} open={open} overlayRadius={overlayRadius} onClick={handleClick}>
      {children}
    </OverlayContainer>
  );
};

export default Overlay;
