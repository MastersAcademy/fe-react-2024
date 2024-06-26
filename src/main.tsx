import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';

import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store'

ReactDOM.createRoot(document.querySelector('#root')!).render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);
