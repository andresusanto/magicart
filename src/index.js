import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import {Provider} from 'react-redux';
import {createStore, combineReducers, compose} from 'redux';
import {reactReduxFirebase, firebaseReducer} from 'react-redux-firebase';
import {reduxFirestore, firestoreReducer} from 'redux-firestore';
import 'firebase/firestore';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const config = {
  apiKey: 'AIzaSyBEbD868o70_bCNx1A0ejKQgy6_oBTh6sU',
  authDomain: 'magi-cart.firebaseapp.com',
  databaseURL: 'https://magi-cart.firebaseio.com',
  projectId: 'magi-cart',
  storageBucket: 'magi-cart.appspot.com',
  messagingSenderId: '62340277476',
};

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};

firebase.initializeApp(config);
firebase.firestore();

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

const initialState = {};
const store = createStoreWithFirebase(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
