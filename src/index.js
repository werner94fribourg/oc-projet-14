import App from './App';
import './index.css';
import './normalize.css';
import './scss/index.scss';
import store from './store/store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { InputDateProvider } from 'werner94fribourg-datepicker';

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
