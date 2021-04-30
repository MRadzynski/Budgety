import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

import {
  auth,
  updateDisplayName,
  updateFinances,
  updateCurrency,
  reauthenticateAndDeleteUser,
} from '../../firebase/firebase.utils';

import {
  selectIncome,
  selectExpenses,
  selectCurrency,
} from '../../redux/finance/finance.selectors';

import {
  selectCurrentUser,
  selectDisplayName,
} from '../../redux/user/user.selectors';

import CURRENCIES_NAME from '../../currencies.names';

import CustomPopup from '../../components/custom-popup/custom-popup.component';

import {
  SettingsContainer,
  SettingsTitle,
  SettingsGroupTitle,
  SettingsGroup,
  SettingsForm,
  SettingFieldContainer,
  SettingLabel,
  SettingInput,
  DangerButton,
  SettingList,
  SettingItem,
  Modal,
  Overlay,
  ExitModal,
  ErrorMessage,
} from './settings.styles';

const SettingsPage = ({
  currentUser,
  displayName,
  income,
  expenses,
  currency,
}) => {
  const history = useHistory();
  const overlayRef = useRef();
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState(currency);
  const [newDisplayName, setNewDisplayName] = useState(displayName);
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [openPopup, setOpenPopup] = useState(false);

  const handleEraseClick = () => {
    income.map((singleIncome) => (singleIncome.amount = 0));
    expenses.map((expense) => (expense.amount = 0));

    updateFinances(currentUser.id, expenses, income);
  };

  const handleCurrencyChange = (e) => {
    const newCurrencyName = e.target.attributes[0].value;
    setCurrentCurrency(newCurrencyName);

    updateCurrency(currentUser.id, newCurrencyName);
  };

  const handleDisplayNameChange = (e) => {
    setNewDisplayName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleBlur = () => {
    if (displayName === newDisplayName) return;

    updateDisplayName(currentUser, newDisplayName);
  };

  const closeModal = (e) => {
    if (overlayRef.current === e.target) {
      setOpenModal(false);
      setErrorMessage('');
      setPassword('');
    }
  };

  const handleDeleteSubmit = (e) => {
    e.preventDefault();
    reauthenticateAndDeleteUser(password)
      .then(() => history.push('/signin'))
      .catch((error) => {
        if (error.code === `auth/user-mismatch`) {
          setErrorMessage('Incorrect user data, please try again!');
          setOpenPopup(true);
        } else if (error.code === `auth/wrong-password`) {
          setErrorMessage('Wrong Password!');
        } else {
          setOpenModal(false);
          setErrorMessage('');
          setOpenPopup(true);
        }
      });
  };

  return (
    <SettingsContainer onClick={() => (open ? setOpen(false) : null)}>
      <SettingsTitle>Settings</SettingsTitle>
      <SettingsGroup>
        <SettingsGroupTitle>User</SettingsGroupTitle>
        <SettingFieldContainer>
          <SettingLabel>Display name</SettingLabel>
          <SettingInput
            type="text"
            name="displayName"
            value={newDisplayName || ''}
            onChange={handleDisplayNameChange}
            onBlur={handleBlur}
            required
          />
        </SettingFieldContainer>
      </SettingsGroup>
      <SettingsGroup>
        <SettingsGroupTitle>Data</SettingsGroupTitle>
        <SettingFieldContainer>
          <SettingLabel>Currency</SettingLabel>
          <SettingInput
            readOnly
            value={currentCurrency}
            onClick={() => setOpen(!open)}
            required
          />
          <SettingList open={open}>
            {CURRENCIES_NAME.map((currencyName, index) => (
              <SettingItem
                key={index}
                value={currencyName}
                onClick={handleCurrencyChange}
              >
                {currencyName}
              </SettingItem>
            ))}
          </SettingList>
        </SettingFieldContainer>
      </SettingsGroup>
      <SettingsGroup>
        <SettingsGroupTitle>Danger Zone</SettingsGroupTitle>
        <SettingsForm onSubmit={(e) => e.preventDefault()}>
          <SettingFieldContainer>
            <SettingLabel>Erase balance</SettingLabel>
            <DangerButton onClick={handleEraseClick}>Erase!</DangerButton>
          </SettingFieldContainer>
          <SettingFieldContainer>
            <SettingLabel>Delete account</SettingLabel>
            <DangerButton
              onClick={(e) =>
                auth.currentUser.providerData[0].providerId === 'password'
                  ? setOpenModal(true)
                  : handleDeleteSubmit(e)
              }
            >
              Delete!
            </DangerButton>
          </SettingFieldContainer>
        </SettingsForm>
      </SettingsGroup>
      {openModal ? (
        <Overlay ref={overlayRef} onClick={closeModal} open={openModal}>
          <Modal>
            <ExitModal
              onClick={() => {
                setOpenModal(false);
                setErrorMessage('');
                setPassword('');
              }}
            >
              &#10005;
            </ExitModal>
            <SettingsForm onSubmit={handleDeleteSubmit}>
              <SettingsGroupTitle>Are you sure?</SettingsGroupTitle>
              <SettingLabel>Enter your Password</SettingLabel>
              <SettingInput
                type="password"
                value={password || ''}
                onChange={handlePasswordChange}
                required
              />
              <ErrorMessage>{errorMessage}</ErrorMessage>
              <DangerButton>Confirm</DangerButton>
            </SettingsForm>
          </Modal>
        </Overlay>
      ) : null}
      {openPopup ? (
        <Overlay
          ref={overlayRef}
          open={openPopup}
          onClick={(e) => {
            if (overlayRef.current === e.target) setOpenPopup(false);
          }}
        >
          <CustomPopup open={openPopup} setOpen={setOpenPopup}>
            {errorMessage}
          </CustomPopup>
        </Overlay>
      ) : null}
    </SettingsContainer>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  displayName: selectDisplayName(state),
  income: selectIncome(state),
  expenses: selectExpenses(state),
  currency: selectCurrency(state),
});

export default connect(mapStateToProps)(SettingsPage);
