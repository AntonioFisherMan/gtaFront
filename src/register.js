import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';


ReactDOM.render(
        <React.StrictMode>
                <RegisterPage />
        </React.StrictMode>,
        document.getElementById('register')
);
