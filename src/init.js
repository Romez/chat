import { configureStore } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import faker from 'faker';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import reducer from './store';
import initWebSocket from './socket';
import { UserProvider } from './contexts/user';
import App from './App';

export default () => {
  const store = configureStore({ reducer });
  initWebSocket(store);

  let nickname = Cookies.get('nickname');
  if (nickname) {
    nickname = faker.name.findName();
    Cookies.set('nickname', nickname);
  }

  ReactDOM.render(
    <Provider store={store}>
      <UserProvider value={{ nickname }}>
        <App />
      </UserProvider>
    </Provider>,
    document.getElementById('chat'),
  );
};
