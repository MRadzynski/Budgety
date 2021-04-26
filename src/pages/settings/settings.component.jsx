import React from 'react';
import { connect } from 'react-redux';

import {
  selectIncome,
  selectExpenses,
} from '../../redux/finance/finance.selectors';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import { updateFinances } from '../../firebase/firebase.utils';

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
} from './settings.styles';

const Settings = ({ currentUser, income, expenses }) => {
  const handleClick = () => {
    income.map((singleIncome) => (singleIncome.amount = 0));
    expenses.map((expense) => (expense.amount = 0));

    updateFinances(currentUser.id, expenses, income);
  };

  return (
    <SettingsContainer>
      <SettingsTitle>Settings</SettingsTitle>
      <SettingsGroup>
        <SettingsGroupTitle>User</SettingsGroupTitle>
      </SettingsGroup>
      <SettingsGroup>
        <SettingsGroupTitle>Data</SettingsGroupTitle>
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
});

export default connect(mapStateToProps)(Settings);
