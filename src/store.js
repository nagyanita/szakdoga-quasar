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
const firstListRef = database.ref('shoppingLists/firstList');
const secondListRef = database.ref('shoppingLists/secondList');

const notesRef = database.ref('notes');

export default {
  state: {
    items: [],
    shoppingLists: [],
    firstList: [],
    secondList: [],
    notes: [],
    itemsRef,
    shoppingListsRef,
    firstListRef,
    secondListRef,
    notesRef,
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
    setFirstListRef: firebaseAction(({
      bindFirebaseRef,
    }) => {
      bindFirebaseRef('firstList', firstListRef);
    }),
    setSecondListRef: firebaseAction(({
      bindFirebaseRef,
    }) => {
      bindFirebaseRef('secondList', secondListRef);
    }),
    setNotesRef: firebaseAction(({
      bindFirebaseRef,
    }) => {
      bindFirebaseRef('notes', notesRef);
    }),
  },
};
