import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { LoginPage } from './pages/forms/LoginPage/LoginPage';
import { RegisterPage } from './pages/forms/RegisterPage/RegisterPage';
import { RecoverPassPage } from './pages/forms/RecoverPassPage/RecoverPassPage';
import { FormStylesHOC } from './hoc/FormStylesHOC/FormStylesHOC'
import { InformPage } from './pages/InformPage/InformPage';
import { InformUserStylesHOC } from './hoc/InformUserStylesHOC/InformUserStylesHOC';


const ComponentWithStyles = InformUserStylesHOC(InformPage)

ReactDOM.render(
  <React.StrictMode>
    <ComponentWithStyles />
  </React.StrictMode>,
  document.getElementById('login')
);

