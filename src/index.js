import React from 'react';
import ReactDOM from 'react-dom/client';
import './front/css/index.css';
import Galvene from './front/Galvene';
import reportWebVitals from './front/reportWebVitals';
import './back/i18n.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Titulkonteineris from './front/Titulkonteineris';
import ParMani from './front/ParMani';
import Pilsetas from './front/Pilsetas';
import Slaidshovs from './front/Slaidshovs';
import Riga from './front/Riga';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Galvene />
    <Titulkonteineris />
    <ParMani />
    <Pilsetas />
    <Slaidshovs />
    <Riga />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
