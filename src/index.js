import React from 'react';
import ReactDOM from 'react-dom';
import { AppDataHOC } from './hoc/AppDataHOC';
import './index.css';
import { LoginPage } from './pages/forms/LoginPage/LoginPage';
import { RegisterPage } from './pages/forms/RegisterPage/RegisterPage';
import { RecoverPassPage } from './pages/forms/RecoverPassPage/RecoverPassPage';
const ComponentWithStyles = AppDataHOC(RecoverPassPage)

ReactDOM.render(
  <React.StrictMode>
    <ComponentWithStyles />
  </React.StrictMode>,
  document.getElementById('login')
);

