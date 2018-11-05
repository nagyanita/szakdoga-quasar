import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyDV24_NMIHhK3B3sV1sUzVmUjuho5gonFY',
  authDomain: 'szakdogaquasar.firebaseapp.com',
  databaseURL: 'https://szakdogaquasar.firebaseio.com',
  projectId: 'szakdogaquasar',
  storageBucket: 'szakdogaquasar.appspot.com',
  messagingSenderId: '493399463244',
};

firebase.initializeApp(config);

export const database = firebase.firestore();

database.settings({
  timestampsInSnapshots: true,
});

export default {};
