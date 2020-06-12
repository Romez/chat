import socket from 'socket.io-client';

import debug from '../lib/logger';
import { store, actions } from './slices';

const log = debug('WS');

const wsConnection = socket('/');

wsConnection.on('connect', () => {
  log('CONNECTED');
});

wsConnection.on('disconnect', () => {
  log('DISCONCT');
});

wsConnection.on('newChannel', ({ data }) => {
  const { attributes } = data;
  store.dispatch(actions.addChannel(attributes));
});

wsConnection.on('renameChannel', ({ data }) => {
  const { attributes } = data;
  store.dispatch(actions.renameChannel(attributes));
});

wsConnection.on('removeChannel', ({ data }) => {
  const { id } = data;
  store.dispatch(actions.removeChannel({ id }));
});

wsConnection.on('newMessage', ({ data }) => {
  const { attributes } = data;
  store.dispatch(actions.addMessage(attributes));
});
