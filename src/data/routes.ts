import ExchangePage from '../pages/ExchangePage/ExchangePage';
import ExpensesIncomePage from '../pages/ExpensesIncomePage/ExpensesIncomePage';
import HistoryPage from '../pages/HistoryPage/HistoryPage';
import HomePage from '../pages/HomePage/HomePage';
import ResetPassword from '../components/ResetPassword/ResetPassword';
import SettingsPage from '../pages/SettingsPage/SettingsPage';
import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';

export const ROUTES = [
  {
    Component: HomePage,
    path: '/',
    redirectTo: '/signin'
  },
  {
    Component: ExpensesIncomePage,
    path: '/expenses',
    redirectTo: '/signin'
  },
  {
    Component: ExpensesIncomePage,
    path: '/expenses/add-expenses',
    redirectTo: '/signin'
  },
  {
    Component: ExpensesIncomePage,
    path: '/expenses/add-expenses/:categoryName',
    redirectTo: '/signin'
  },
  {
    Component: ExpensesIncomePage,
    path: '/expenses/add-new-category',
    redirectTo: '/signin'
  },
  {
    Component: ExpensesIncomePage,
    path: '/expenses/edit-category/:categoryId',
    redirectTo: '/signin'
  },
  {
    Component: ExpensesIncomePage,
    path: '/income',
    redirectTo: '/signin'
  },
  {
    Component: ExpensesIncomePage,
    path: '/income/add-income',
    redirectTo: '/signin'
  },
  {
    Component: ExpensesIncomePage,
    path: '/income/add-income/:categoryName',
    redirectTo: '/signin'
  },
  {
    Component: ExpensesIncomePage,
    path: '/income/add-new-category',
    redirectTo: '/signin'
  },
  {
    Component: ExpensesIncomePage,
    path: '/income/edit-category/:categoryId',
    redirectTo: '/signin'
  },
  {
    Component: ExchangePage,
    path: '/exchange',
    redirectTo: '/signin'
  },
  {
    Component: HistoryPage,
    path: '/history',
    redirectTo: '/signin'
  },
  {
    Component: SettingsPage,
    path: '/settings',
    redirectTo: '/signin'
  },
  {
    Component: ResetPassword,
    path: '/reset-password',
    redirectTo: '/',
    unAuthed: true
  },
  {
    Component: SignUp,
    path: '/signup',
    redirectTo: '/',
    unAuthed: true
  },
  {
    Component: SignIn,
    path: '/signin',
    redirectTo: '/',
    unAuthed: true
  }
];
