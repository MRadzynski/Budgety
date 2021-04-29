import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import FinanceSchema from './finances.schema';

const config = {
  apiKey: 'AIzaSyB3uJxFSTpQpdqN9XOT3HtDrRi0aY3_y-Q',
  authDomain: 'budgety-database.firebaseapp.com',
  projectId: 'budgety-database',
  storageBucket: 'budgety-database.appspot.com',
  messagingSenderId: '797033158597',
  appId: '1:797033158597:web:e36e130ca99fcdf8679dac',
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
        email,
        createdAt,
        ...additionalData,
      });
    }
    return userRef;
  } catch (error) {
    console.log('User creating error', error.message);
  }
};

export const getUserFinancesRef = async (userId) => {
  const financesRef = firestore
    .collection('finances')
    .where('userId', '==', userId);
  const financesSnapshot = await financesRef.get();

  if (financesSnapshot.empty) {
    const financesDocRef = firestore.collection('finances').doc();
    await financesDocRef.set({
      userId,
      expenses: FinanceSchema.expenses,
      income: FinanceSchema.income,
      savings: FinanceSchema.savings,
      currency: FinanceSchema.currency,
    });
    return financesDocRef;
  } else {
    return financesSnapshot.docs[0].ref;
  }
};

export const updateDisplayName = async (user, displayName) => {
  const userRef = firestore.doc(`users/${user.id}`);

  await userRef.update({ ...user, displayName: displayName });
};

export const updateFinances = async (userId, expenseObj, incomeObj) => {
  const financesRef = firestore
    .collection('finances')
    .where('userId', '==', userId);
  const financesSnapshot = await financesRef.get();

  if (expenseObj === null) {
    await financesSnapshot.docs[0].ref.update({ income: incomeObj });
  } else if (incomeObj === null) {
    await financesSnapshot.docs[0].ref.update({ expenses: expenseObj });
  } else {
    await financesSnapshot.docs[0].ref.update({
      expenses: expenseObj,
      income: incomeObj,
    });
  }
};

export const updateCurrency = async (userId, newCurrency) => {
  const financesRef = firestore
    .collection('finances')
    .where('userId', '==', userId);

  const financesSnapshot = await financesRef.get();

  await financesSnapshot.docs[0].ref.update({ currency: newCurrency });
};

export const deleteAccount = async (userId) => {
  const financesRef = firestore
    .collection('finances')
    .where('userId', '==', userId);
  const financesSnapshot = await financesRef.get();

  await financesSnapshot.docs[0].ref.delete();
  await firestore.doc(`users/${userId}`).delete();
  await auth.currentUser.delete();
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
      .then((res) => deleteAccount(user.uid))
      .catch((error) => {
        throw new Error({ message: `Couldn't perform this action` });
      });
  } else if (provider === 'google.com') {
    return user
      .reauthenticateWithPopup(googleProvider)
      .then((res) => deleteAccount(user.uid))
      .catch((error) => {
        throw new Error({ message: `Couldn't perform this action` });
      });
  }
};

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
