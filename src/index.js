import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { firebase } from '@firebase/app'
import 'firebase/firestore'
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyK9AVv5wfCcxzdnyriHV62AETKGdhHXY",
  authDomain: "btnotes-22246.firebaseapp.com",
  databaseURL: "https://btnotes-22246.firebaseio.com",
  projectId: "btnotes-22246",
  storageBucket: "btnotes-22246.appspot.com",
  messagingSenderId: "80096420347",
  appId: "1:80096420347:web:8b268f4103658374f66b5e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

