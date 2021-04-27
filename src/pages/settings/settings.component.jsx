import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  selectIncome,
  selectExpenses,
  selectCurrency,
} from '../../redux/finance/finance.selectors';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import { updateFinances, updateCurrency } from '../../firebase/firebase.utils';

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
} from './settings.styles';

const Settings = ({ currentUser, income, expenses, currency }) => {
  const [open, setOpen] = useState(false);
  const [currentCurrency, setCurrentCurrency] = useState(currency);

  const handleClick = () => {
    income.map((singleIncome) => (singleIncome.amount = 0));
    expenses.map((expense) => (expense.amount = 0));

    updateFinances(currentUser.id, expenses, income);
  };

  const handleCurrencyChange = (e) => {
    const newCurrencyName = e.target.attributes[0].value;
    setCurrentCurrency(newCurrencyName);
    updateCurrency(currentUser.id, newCurrencyName);
  };

  return (
    <SettingsContainer onClick={() => (open ? setOpen(false) : null)}>
      <SettingsTitle>Settings</SettingsTitle>
      <SettingsGroup>
        <SettingsGroupTitle>User</SettingsGroupTitle>
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
            <EraseButton onClick={handleClick}>Erase!</EraseButton>
          </SettingFieldContainer>
        </SettingsForm>
      </SettingsGroup>
    </SettingsContainer>
  );
};

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  income: selectIncome(state),
  expenses: selectExpenses(state),
  currency: selectCurrency(state),
});

export default connect(mapStateToProps)(Settings);
