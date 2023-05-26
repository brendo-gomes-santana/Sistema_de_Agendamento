import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterApp from './router';
import './module.global.scss'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer 
      autoClose={2500}
      theme='colored'
      position='top-center'
      pauseOnHover={false}
    />
    <RouterApp />
  </React.StrictMode>
);

