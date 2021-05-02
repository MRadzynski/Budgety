import React, { useRef } from 'react';

import { OverlayContainer } from './overlay.styles';

const Overlay = ({
  open,
  setOpen,
  children,
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
    <OverlayContainer ref={overlayRef} open={open} onClick={handleClick}>
      {children}
    </OverlayContainer>
  );
};

export default Overlay;
