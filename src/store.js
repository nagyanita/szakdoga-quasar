import firebase from 'firebase';
import { firebaseMutations, firebaseAction } from 'vuexfire';

const config = {
  apiKey: 'AIzaSyC09wba_8ysxNfMblmZrzlgWraGW8z4xsM',
  authDomain: 'szakdoga-quasar.firebaseapp.com',
  databaseURL: 'https://szakdoga-quasar.firebaseio.com',
  projectId: 'szakdoga-quasar',
  storageBucket: 'szakdoga-quasar.appspot.com',
  messagingSenderId: '804553793662',
};

firebase.initializeApp(config);

const database = firebase.database();

const itemsRef = database.ref('items');
const shoppingListsRef = database.ref('shoppingLists');

export default {
  state: {
    items: [],
    shoppingLists: [],
  },
  mutations: firebaseMutations,
  actions: {
    setItemsRef: firebaseAction(({
      bindFirebaseRef,
    }) => {
      bindFirebaseRef('items', itemsRef);
    }),
    setShoppingListsRef: firebaseAction(({
      bindFirebaseRef,
    }) => {
      bindFirebaseRef('shoppingLists', shoppingListsRef);
    }),
  },
};
