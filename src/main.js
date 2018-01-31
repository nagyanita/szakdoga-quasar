/* eslint-disable import/no-dynamic-require,  import/no-unresolved, global-require, no-new  */
import 'quasar-extras/material-icons';

import Vue from 'vue';
import VueFire from 'vuefire';
// import Firebase from 'firebase';
import Quasar from 'quasar';
import router from './router';

// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`);
// ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)

Vue.config.productionTip = false;
Vue.use(Quasar); // Install Quasar Framework
Vue.use(VueFire);

/* const config = {
  apiKey: 'AIzaSyC09wba_8ysxNfMblmZrzlgWraGW8z4xsM',
  authDomain: 'szakdoga-quasar.firebaseapp.com',
  databaseURL: 'https://szakdoga-quasar.firebaseio.com',
  projectId: 'szakdoga-quasar',
  storageBucket: 'szakdoga-quasar.appspot.com',
  messagingSenderId: '804553793662',
};

const app = Firebase.initializeApp(config);
const db = app.database();
const booksRef = db.ref('books'); */

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font');
}
// import 'quasar-extras/ionicons'
// import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    render: h => h(require('./App').default),
  });
});
