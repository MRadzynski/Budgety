import 'firebase/auth';
import 'firebase/firestore';
import firebase from 'firebase/app';
import FinanceSchema from './finances.schema';

const config = {
  apiKey: 'AIzaSyB3uJxFSTpQpdqN9XOT3HtDrRi0aY3_y-Q',
  appId: '1:797033158597:web:e36e130ca99fcdf8679dac',
  authDomain: 'budgety-database.firebaseapp.com',
  messagingSenderId: '797033158597',
  projectId: 'budgety-database',
  storageBucket: 'budgety-database.appspot.com'
};

firebase.initializeApp(config);

export const createUserDocument = async (userAuth, additionalData) => {
  try {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const userSnapshot = await userRef.get();

    if (!userSnapshot.exists) {
      const { email } = userAuth;
      const createdAt = new Date();

      await userRef.set({
        createdAt,
        email,
        ...additionalData
      });
    }
    return userRef;
  } catch (error) {
    throw new Error({ message: `Couldn't create user document` });
  }
};

export const deleteAccount = async userId => {
  try {
    const financesRef = firestore
      .collection('finances')
      .where('userId', '==', userId);
    const financesSnapshot = await financesRef.get();

    await financesSnapshot.docs[0].ref.delete();
    await firestore.doc(`users/${userId}`).delete();
    await auth.currentUser.delete();
  } catch (error) {
    throw new Error({ message: `Couldn't perform this action` });
  }
};

export const getUserFinancesRef = async userId => {
  const financesRef = firestore
    .collection('finances')
    .where('userId', '==', userId);
  const financesSnapshot = await financesRef.get();

  if (financesSnapshot.empty) {
    const financesDocRef = firestore.collection('finances').doc();
    await financesDocRef.set({
      currency: FinanceSchema.currency,
      expenses: FinanceSchema.expenses,
      expensesLogs: FinanceSchema.expensesLogs,
      historyLogs: FinanceSchema.historyLogs,
      income: FinanceSchema.income,
      incomeLogs: FinanceSchema.incomeLogs,
      userId
    });
    return financesDocRef;
  } else {
    return financesSnapshot.docs[0].ref;
  }
};

export const reauthenticateAndDeleteUser = (password = '') => {
  const user = firebase.auth().currentUser;
  const provider = user.providerData[0].providerId;

  if (provider === 'password') {
    const credentials = firebase.auth.EmailAuthProvider.credential(
      user.email,
      password
    );
    return user
      .reauthenticateWithCredential(credentials)
      .then(() => deleteAccount(user.uid))
      .catch(error => {
        throw error;
      });
  } else if (provider === 'google.com') {
    return user
      .reauthenticateWithPopup(googleProvider)
      .then(() => deleteAccount(user.uid))
      .catch(error => {
        throw error;
      });
  }
};

export const resetUserPassword = async email => {
  try {
    auth.useDeviceLanguage();

    const actionCodeSettings = {
      handleCodeInApp: false,
      url:
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000/signin'
          : 'https://budgety-live.herokuapp.com/signin'
    };
    await auth.sendPasswordResetEmail(email, actionCodeSettings);
  } catch (error) {
    throw error;
  }
};

export const updateCurrency = async (userId, newCurrency) => {
  const financesRef = firestore
    .collection('finances')
    .where('userId', '==', userId);

  const financesSnapshot = await financesRef.get();

  await financesSnapshot.docs[0].ref.update({ currency: newCurrency });
};

export const updateDisplayName = async (user, displayName) => {
  const userRef = firestore.doc(`users/${user.id}`);

  await userRef.update({ ...user, displayName: displayName });
};

export const updateFinances = async (userId, expenseObj, incomeObj, logs) => {
  const financesRef = firestore
    .collection('finances')
    .where('userId', '==', userId);
  const financesSnapshot = await financesRef.get();

  if (expenseObj === null) {
    await financesSnapshot.docs[0].ref.update({
      income: incomeObj,
      incomeLogs: logs
    });
  } else if (incomeObj === null) {
    await financesSnapshot.docs[0].ref.update({
      expenses: expenseObj,
      expensesLogs: logs
    });
  } else {
    await financesSnapshot.docs[0].ref.update({
      expenses: expenseObj,
      expensesLogs: logs,
      historyLogs: logs,
      income: incomeObj,
      incomeLogs: logs
    });
  }
};

export const updateHistory = async (userId, history) => {
  const financesRef = firestore
    .collection('finances')
    .where('userId', '==', userId);

  const financesSnapshot = await financesRef.get();

  await financesSnapshot.docs[0].ref.update({ historyLogs: history });
};

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export default firebase;
