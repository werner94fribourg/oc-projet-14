import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './normalize.css';
import './index.css';
import './scss/index.scss';
import { InputDateProvider } from '@werner94fribourg/datepicker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <InputDateProvider>
        <App />
      </InputDateProvider>
    </Provider>
  </BrowserRouter>
);
