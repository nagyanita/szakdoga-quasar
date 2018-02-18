import firebase from 'firebase';

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


export default {
  data() {
    return {
      firebase: {
        items: database.ref('items'),
        shoppingLists: database.ref('shoppingLists'),
      },
    };
  },
  methods: {
    getItems() {
      return firebase.database().ref('/items').once('value').then((snapshot) => {
        console.log(snapshot);
      });
    },
  },
};
