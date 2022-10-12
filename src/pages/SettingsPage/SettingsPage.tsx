import AuthorizationModal from '../../components/AutorizationModal/AutorizationModal';
import CurrenciesNamesList from '../../components/CurrenciesNamesList/CurrenciesNamesList';
import CustomModal from '../../components/CustomModal/CustomModal';
import CustomPopup from '../../components/CustomPopup/CustomPopup';
import React, { useState } from 'react';
import {
  auth,
  reauthenticateAndDeleteUser,
  updateCurrency,
  updateDisplayName,
  updateFinances,
  updateHistory
} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import {
  DangerButton,
  SettingFieldContainer,
  SettingInput,
  SettingLabel,
  SettingsContainer,
  SettingsGroup,
  SettingsGroupTitle,
  SettingsTitle
} from './SettingsPage.styles';
import {
  ExpensesIncomeWithLogsData,
  ICurrentUser
} from '../../utils/interfaces';
import {
  selectCurrency,
  selectExpenses,
  selectIncome
} from '../../redux/finance/finance.selectors';
import {
  selectCurrentUser,
  selectDisplayName
} from '../../redux/user/user.selectors';
import { useNavigate } from 'react-router';

interface SettingsPageProps {
  currency: string;
  currentUser: ICurrentUser;
  displayName: string;
  expenses: ExpensesIncomeWithLogsData[];
  income: ExpensesIncomeWithLogsData[];
}

const SettingsPage = ({
  currency,
  currentUser,
  displayName,
  expenses,
  income
}: SettingsPageProps) => {
  const [currentCurrency, setCurrentCurrency] = useState(currency);
  const [errorMessage, setErrorMessage] = useState('');
  const [newDisplayName, setNewDisplayName] = useState(displayName);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEraseModal, setOpenEraseModal] = useState(false);
  const [openList, setOpenList] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleBlur = () => {
    if (displayName === newDisplayName) return;

    updateDisplayName(currentUser, newDisplayName);
  };

  const handleCurrencyChange = (e: React.SyntheticEvent) => {
    const newCurrencyName = (e.target as HTMLElement).attributes[0].value;
    setCurrentCurrency(newCurrencyName);

    updateCurrency(currentUser.id, newCurrencyName);
  };

  const handleDeleteClick = () =>
    auth.currentUser!.providerData[0].providerId === 'password'
      ? setOpenDeleteModal(true)
      : handleDeleteSubmit();

  const handleDeleteSubmit = () => {
    reauthenticateAndDeleteUser(password)!
      .then(() => navigate('/signin'))
      .catch(error => {
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

  const handleDisplayNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewDisplayName(e.target.value);

  const handleEraseClick = () => setOpenEraseModal(true);

  const handleEraseSubmit = () => {
    income.map(singleIncome => {
      singleIncome.amount = 0;
      singleIncome.logs = [];

      return singleIncome;
    });

    expenses.map(expense => {
      expense.amount = 0;
      expense.logs = [];

      return expense;
    });

    updateFinances(currentUser.id, expenses, income, []);
    updateHistory(currentUser.id, []);

    setOpenEraseModal(false);
    setErrorMessage('Data erased!');
    setOpenPopup(true);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  return (
    <SettingsContainer onClick={() => openList && setOpenList(false)}>
      <SettingsTitle>Settings</SettingsTitle>
      <SettingsGroup>
        <SettingsGroupTitle>User</SettingsGroupTitle>
        <SettingFieldContainer>
          <SettingLabel>Display name</SettingLabel>
          <SettingInput
            name="displayName"
            onBlur={handleBlur}
            onChange={handleDisplayNameChange}
            required
            type="text"
            value={newDisplayName || ''}
          />
        </SettingFieldContainer>
      </SettingsGroup>

      <SettingsGroup>
        <SettingsGroupTitle>Data</SettingsGroupTitle>
        <SettingFieldContainer>
          <SettingLabel>Currency</SettingLabel>
          <SettingInput
            onClick={() => setOpenList(!openList)}
            readOnly
            required
            value={currentCurrency}
          />
          <CurrenciesNamesList
            chooseCurrencyFunction={handleCurrencyChange}
            open={openList}
          />
        </SettingFieldContainer>
      </SettingsGroup>

      <SettingsGroup>
        <SettingsGroupTitle>Danger Zone</SettingsGroupTitle>
        <SettingFieldContainer>
          <SettingLabel>Erase balance</SettingLabel>
          <DangerButton onClick={handleEraseClick}>Erase</DangerButton>
        </SettingFieldContainer>
        <SettingFieldContainer>
          <SettingLabel>Delete account</SettingLabel>
          <DangerButton onClick={handleDeleteClick}>Delete</DangerButton>
        </SettingFieldContainer>
      </SettingsGroup>

      {openDeleteModal && (
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
      )}
      {openPopup && (
        <CustomPopup
          open={openPopup}
          setError={setErrorMessage}
          setOpen={setOpenPopup}
        >
          {errorMessage}
        </CustomPopup>
      )}
      {openEraseModal && (
        <CustomModal
          confirmFunction={handleEraseSubmit}
          open={openEraseModal}
          setOpen={setOpenEraseModal}
        >
          Are you sure?
        </CustomModal>
      )}
    </SettingsContainer>
  );
};

const mapStateToProps = (state: SettingsPageProps) => ({
  currency: selectCurrency(state),
  currentUser: selectCurrentUser(state),
  displayName: selectDisplayName(state),
  expenses: selectExpenses(state),
  income: selectIncome(state)
});

export default connect(mapStateToProps)(SettingsPage);
