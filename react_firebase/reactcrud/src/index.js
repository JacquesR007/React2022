import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import 'bootstrap/dist/css/bootstrap.min.css';

var config = {
  apiKey: "AIzaSyDN_yKE4SoLWjaMFC4RMx7CrVByOSC5QrI",
  authDomain: "react-project-68ba7.firebaseapp.com",
  projectId: "react-project-68ba7",
  storageBucket: "react-project-68ba7.appspot.com",
  messagingSenderId: "713549101699",
  appId: "1:713549101699:web:7d944254c1378f5c15f9b6",
  measurementId: "G-V04TVQX1VN"
};


firebase.initializeApp(config);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
