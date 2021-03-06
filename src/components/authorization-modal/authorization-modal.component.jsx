import React from 'react';

import Overlay from '../overlay/overlay.component';

import {
  CustomModalContainer,
  CustomModalExit,
  CustomModalTitle,
  CustomModalButton,
} from '../custom-modal/custom-modal.styles';

import {
  ModalInput,
  ModalLabel,
  ErrorMessage,
  ModalForm,
} from './authorization-modal.styles';

const AuthorizationModal = ({
  open,
  setOpen,
  setError,
  errorMessage,
  setInput,
  inputValue,
  inputFunction,
  submitFunction,
}) => {
  const handleExit = () => {
    setOpen(false);
    setError('');
    setInput('');
  };
  return (
    <Overlay
      open={open}
      setOpen={setOpen}
      setError={setError}
      setInput={setInput}
    >
      <CustomModalContainer open={open} large>
        <CustomModalExit onClick={handleExit}>&#10005;</CustomModalExit>
        <ModalForm
          onSubmit={(e) => {
            e.preventDefault();
            submitFunction();
          }}
        >
          <CustomModalTitle>Are you sure?</CustomModalTitle>
          <ModalLabel>Enter your password</ModalLabel>
          <ModalInput
            type="password"
            value={inputValue || ''}
            onChange={(e) => inputFunction(e)}
            required
          />
          <ErrorMessage>{errorMessage}</ErrorMessage>
          <CustomModalButton large>Confirm</CustomModalButton>
        </ModalForm>
      </CustomModalContainer>
    </Overlay>
  );
};

export default AuthorizationModal;
