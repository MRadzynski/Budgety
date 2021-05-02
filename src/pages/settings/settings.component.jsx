import React, { useState } from 'react';
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

import CustomModal from '../../components/custom-modal/custom-modal.component';

import AuthorizationModal from '../../components/authorization-modal/authorization-modal.component';

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
} from './settings.styles';

const SettingsPage = ({
  currentUser,
  displayName,
  income,
  expenses,
  currency,
}) => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [openEraseModal, setOpenEraseModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState(currency);
  const [newDisplayName, setNewDisplayName] = useState(displayName);
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEraseClick = () => {
    income.map((singleIncome) => (singleIncome.amount = 0));
    expenses.map((expense) => (expense.amount = 0));

    updateFinances(currentUser.id, expenses, income);
    setOpenEraseModal(false);
    setErrorMessage('Data erased!');
    setOpenPopup(true);
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

  const handleDeleteSubmit = () => {
    reauthenticateAndDeleteUser(password)
      .then(() => history.push('/signin'))
      .catch((error) => {
        if (error.code === `auth/user-mismatch`) {
          setErrorMessage('Incorrect user data, please try again!');
          setOpenPopup(true);
        } else if (error.code === `auth/wrong-password`) {
          setErrorMessage('Wrong Password!');
        } else if (error.code === `auth/too-many-requests`) {
          setErrorMessage('Too many requests. Try again later');
        } else {
          setOpenDeleteModal(false);
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
            <DangerButton onClick={() => setOpenEraseModal(true)}>
              Erase!
            </DangerButton>
          </SettingFieldContainer>
          <SettingFieldContainer>
            <SettingLabel>Delete account</SettingLabel>
            <DangerButton
              onClick={(e) =>
                auth.currentUser.providerData[0].providerId === 'password'
                  ? setOpenDeleteModal(true)
                  : handleDeleteSubmit(e)
              }
            >
              Delete!
            </DangerButton>
          </SettingFieldContainer>
        </SettingsForm>
      </SettingsGroup>

      {openDeleteModal ? (
        <AuthorizationModal
          open={openDeleteModal}
          setOpen={setOpenDeleteModal}
          setError={setErrorMessage}
          errorMessage={errorMessage}
          setInput={setPassword}
          inputValue={password}
          inputFunction={handlePasswordChange}
          submitFunction={handleDeleteSubmit}
        />
      ) : null}
      {openPopup ? (
        <CustomPopup
          open={openPopup}
          setOpen={setOpenPopup}
          setError={setErrorMessage}
        >
          {errorMessage}
        </CustomPopup>
      ) : null}
      {openEraseModal ? (
        <CustomModal
          open={openEraseModal}
          setOpen={setOpenEraseModal}
          confirmFunction={handleEraseClick}
        >
          Are you sure?
        </CustomModal>
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
