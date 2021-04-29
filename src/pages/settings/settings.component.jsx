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

import {
  SettingsContainer,
  SettingsTitle,
  SettingsGroupTitle,
  SettingsGroup,
  SettingsForm,
  SettingFieldContainer,
  SettingLabel,
  SettingInput,
  EraseButton,
  SettingList,
  SettingItem,
  Modal,
  Overlay,
} from './settings.styles';

const Settings = ({ currentUser, displayName, income, expenses, currency }) => {
  const history = useHistory();
  const modalRef = useRef();
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState(currency);
  const [newDisplayName, setNewDisplayName] = useState(displayName);
  const [password, setPassword] = useState('');

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
    if (modalRef.current === e.target) setOpenModal(false);
  };

  const handleDeleteSubmit = (e) => {
    e.preventDefault();
    reauthenticateAndDeleteUser(password)
      .then((res) => history.push('/signin'))
      .catch((error) => console.log(error.message));
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
            <EraseButton onClick={handleEraseClick}>Erase!</EraseButton>
          </SettingFieldContainer>
          <SettingFieldContainer>
            <SettingLabel>Delete account</SettingLabel>
            <EraseButton
              onClick={(e) =>
                auth.currentUser.providerData[0].providerId === 'password'
                  ? setOpenModal(true)
                  : handleDeleteSubmit(e)
              }
            >
              Delete!
            </EraseButton>
          </SettingFieldContainer>
        </SettingsForm>
      </SettingsGroup>
      <Overlay ref={modalRef} onClick={closeModal} open={openModal}>
        <Modal>
          <SettingsForm onSubmit={handleDeleteSubmit}>
            <SettingsGroupTitle>Are you sure?</SettingsGroupTitle>
            <SettingLabel>Enter your Password</SettingLabel>
            <SettingInput type="password" onChange={handlePasswordChange} />
          </SettingsForm>
        </Modal>
      </Overlay>
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

export default connect(mapStateToProps)(Settings);
