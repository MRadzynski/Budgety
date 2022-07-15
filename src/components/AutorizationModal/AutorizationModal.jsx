import Overlay from '../Overlay/Overlay';
import React from 'react';
import {
  CustomModalButton,
  CustomModalContainer,
  CustomModalExit,
  CustomModalTitle
} from '../CustomModal/CustomModal.styles';
import {
  ErrorMessage,
  ModalForm,
  ModalInput,
  ModalLabel
} from './AutorizationModal.styles';

const AuthorizationModal = ({
  errorMessage,
  inputFunction,
  inputValue,
  open,
  setError,
  setInput,
  setOpen,
  submitFunction
}) => {
  const handleExit = () => {
    setOpen(false);
    setError('');
    setInput('');
  };

  const submitHandler = e => {
    e.preventDefault();
    submitFunction();
  };

  return (
    <Overlay
      open={open}
      setError={setError}
      setInput={setInput}
      setOpen={setOpen}
    >
      <CustomModalContainer large open={open}>
        <CustomModalExit onClick={handleExit}>&#10005;</CustomModalExit>
        <ModalForm onSubmit={submitHandler}>
          <CustomModalTitle>Are you sure?</CustomModalTitle>
          <ModalLabel>Enter your password</ModalLabel>
          <ModalInput
            onChange={e => inputFunction(e)}
            required
            type="password"
            value={inputValue || ''}
          />
          <ErrorMessage>{errorMessage}</ErrorMessage>
          <CustomModalButton large>Confirm</CustomModalButton>
        </ModalForm>
      </CustomModalContainer>
    </Overlay>
  );
};

export default AuthorizationModal;
