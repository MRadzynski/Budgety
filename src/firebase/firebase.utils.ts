import FinanceSchema from './finances.schema';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  where
} from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  deleteUser,
  EmailAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  reauthenticateWithCredential,
  reauthenticateWithPopup,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import {
  ExpensesIncomeWithLogsData,
  HistoryLogsData,
  ICurrentUser,
  SingleExpenseIncomeLogData
} from '../utils/interfaces';

const CONFIG = {
  apiKey: 'AIzaSyB3uJxFSTpQpdqN9XOT3HtDrRi0aY3_y-Q',
  appId: '1:797033158597:web:e36e130ca99fcdf8679dac',
  authDomain: 'budgety-database.firebaseapp.com',
  messagingSenderId: '797033158597',
  projectId: 'budgety-database',
  storageBucket: 'budgety-database.appspot.com'
};

const firebaseApp = initializeApp(CONFIG);

export const auth = getAuth(firebaseApp);

export const firestore = getFirestore(firebaseApp);

export const createUserDocument = async (
  userAuth: User,
  additionalData?: {
    displayName: string;
  }
) => {
  try {
    if (!userAuth) return;

    const userRef = doc(firestore, `users/${userAuth.uid}`);
    const userSnapshot = await getDoc(userRef);

    if (!userSnapshot.exists()) {
      const { email } = userAuth;
      const createdAt = new Date();

      await setDoc(userRef, {
        createdAt,
        email,
        ...additionalData
      });
    }

    return userRef;
  } catch (error) {
    throw new Error(`Couldn't create a user document`);
  }
};

export const createEmailAndPasswordUser = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const deleteAccount = async (userId: string) => {
  try {
    const user = auth.currentUser;

    const financesRef = collection(firestore, 'finances');
    const financesQuery = query(financesRef, where('userId', '==', userId));
    const financesSnapshot = await getDocs(financesQuery);

    await deleteDoc(financesSnapshot.docs[0].ref);
    await deleteDoc(doc(firestore, `users/${userId}`));
    if (user) {
      await deleteUser(user);
    }
  } catch (error) {
    throw new Error(`Couldn't delete an account`);
  }
};

export const getUserFinancesRef = async (userId: string) => {
  try {
    const financesRef = collection(firestore, 'finances');
    const financesQuery = query(financesRef, where('userId', '==', userId));
    const financesSnapshot = await getDocs(financesQuery);

    if (financesSnapshot.empty) {
      const createdDocRef = await addDoc(financesRef, {
        currency: FinanceSchema.currency,
        expenses: FinanceSchema.expenses,
        expensesLogs: FinanceSchema.expensesLogs,
        historyLogs: FinanceSchema.historyLogs,
        income: FinanceSchema.income,
        incomeLogs: FinanceSchema.incomeLogs,
        userId
      });

      return createdDocRef;
    } else {
      return financesSnapshot.docs[0].ref;
    }
  } catch (error) {
    throw new Error(`Couldn't get database data`);
  }
};

export const reauthenticateAndDeleteUser = (password = '') => {
  const user = auth.currentUser;

  if (user) {
    const provider = user.providerData[0].providerId;

    if (provider === 'password' && user.email) {
      const credentials = EmailAuthProvider.credential(user.email, password);

      return reauthenticateWithCredential(user, credentials)
        .then(() => deleteAccount(user.uid))
        .catch(error => {
          throw error;
        });
    } else if (provider === 'google.com') {
      return reauthenticateWithPopup(user, googleProvider)
        .then(() => deleteAccount(user.uid))
        .catch(error => {
          throw error;
        });
    }
  }
};

export const resetUserPassword = async (email: string) => {
  try {
    auth.useDeviceLanguage();

    const actionCodeSettings = {
      handleCodeInApp: false,
      url:
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000/signin'
          : 'https://budgety-live.herokuapp.com/signin'
    };

    await sendPasswordResetEmail(auth, email, actionCodeSettings);
  } catch (error) {
    throw new Error(`Couldn't reset users password`);
  }
};

export const signInEmailAndPasswordUser = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const signOutFromApp = () => signOut(auth);

export const subscribeToFirebase = ({
  setCurrency,
  setCurrentUser,
  setFinances
}: any) =>
  onAuthStateChanged(auth, async userAuth => {
    try {
      if (userAuth) {
        const userRef = await createUserDocument(userAuth);
        const financeRef = await getUserFinancesRef(userAuth.uid);

        if (userRef) {
          onSnapshot(userRef, snapshot => {
            setCurrentUser({ id: snapshot.id, ...snapshot.data() });
          });

          onSnapshot(financeRef, snapshot => {
            setFinances({
              expenses: snapshot.data()?.expenses,
              expensesLogs: snapshot.data()?.expensesLogs,
              historyLogs: snapshot.data()?.historyLogs,
              income: snapshot.data()?.income,
              incomeLogs: snapshot.data()?.incomeLogs
            });

            setCurrency(snapshot.data()?.currency);
          });
        }
      } else {
        setCurrentUser(null);
        setFinances({
          expenses: null,
          expensesLogs: null,
          historyLogs: null,
          income: null,
          incomeLogs: null
        });
        setCurrency(null);
      }
    } catch (error) {
      throw new Error(`Something went wrong`);
    }
  });

export const updateCurrency = async (userId: string, newCurrency: string) => {
  try {
    const financesRef = collection(firestore, 'finances');
    const financesQuery = query(financesRef, where('userId', '==', userId));
    const financesSnapshot = await getDocs(financesQuery);

    await updateDoc(financesSnapshot.docs[0].ref, { currency: newCurrency });
  } catch (error) {
    throw new Error(`Couldn't update the currency`);
  }
};

export const updateDisplayName = async (
  user: ICurrentUser,
  displayName: string
) => {
  try {
    const userRef = doc(firestore, `users/${user.id}`);

    await updateDoc(userRef, { ...user, displayName: displayName });
  } catch (error) {
    throw new Error(`Couldn't update the profile's display name`);
  }
};

export const updateFinances = async (
  userId: string,
  expenseObj: ExpensesIncomeWithLogsData[] | null,
  incomeObj: ExpensesIncomeWithLogsData[] | null,
  logs: SingleExpenseIncomeLogData[] | SingleExpenseIncomeLogData
) => {
  try {
    const financesRef = collection(firestore, 'finances');
    const financesQuery = query(financesRef, where('userId', '==', userId));
    const financesSnapshot = await getDocs(financesQuery);

    if (expenseObj === null) {
      await updateDoc(financesSnapshot.docs[0].ref, {
        income: incomeObj,
        incomeLogs: logs
      });
    } else if (incomeObj === null) {
      await updateDoc(financesSnapshot.docs[0].ref, {
        expenses: expenseObj,
        expensesLogs: logs
      });
    } else {
      await updateDoc(financesSnapshot.docs[0].ref, {
        expenses: expenseObj,
        expensesLogs: logs,
        historyLogs: logs,
        income: incomeObj,
        incomeLogs: logs
      });
    }
  } catch (error) {
    throw new Error(`Couldn't update data in the database`);
  }
};

export const updateHistory = async (
  userId: string,
  history: HistoryLogsData[]
) => {
  try {
    const financesRef = collection(firestore, 'finances');
    const financesQuery = query(financesRef, where('userId', '==', userId));
    const financesSnapshot = await getDocs(financesQuery);

    await updateDoc(financesSnapshot.docs[0].ref, { historyLogs: history });
  } catch (error) {
    throw new Error(`Couldn't update data in the database`);
  }
};

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
