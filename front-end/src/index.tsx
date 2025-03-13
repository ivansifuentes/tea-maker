import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './utils/store';
import { RouterProvider } from 'react-router-dom';
import router from './utils/router';
import axios from 'axios';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('user-token');
  config.headers.Authorization =  `Bearer ${token}`;
   
  return config;
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
          <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
