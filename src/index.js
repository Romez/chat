import 'regenerator-runtime/runtime';
import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import gon from 'gon';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Cookies from 'js-cookie';
import { name } from 'faker';

import '../assets/application.scss';
import './setupLocalization';
import App from './App';
import reducer from './store';
import initWebSocket from './socket';
import { UserProvider } from './contexts/user';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

const store = configureStore({ reducer });
initWebSocket(store);

let nickname = Cookies.get('nickname');
if (nickname) {
  nickname = name.findName();
  Cookies.set('nickname', nickname);
}

ReactDOM.render(
  <Provider store={store}>
    <UserProvider value={{ nickname }}>
      <App channels={gon.channels} />
    </UserProvider>
  </Provider>,
  document.getElementById('chat'),
);
