import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationDetail3 from './ValidationForm/RegistrationDetail3';
import Animal from './ClassComponentExample/Animal';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Animal name='Gorilla' />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
