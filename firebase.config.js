const firebase = require('firebase');

const config = {
  apiKey: 'AIzaSyDvFc9BHlaqzdKNVNxKOkPa6INWxfLHGfw',
  authDomain: 'jtysk-react-project2.firebaseapp.com',
  databaseURL: 'https://jtysk-react-project2.firebaseio.com',
  storageBucket: 'jtysk-react-project2.appspot.com',
  messagingSenderId: '621557475421',
};
firebase.initializeApp(config);

module.exports = firebase;
