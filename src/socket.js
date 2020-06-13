import socket from 'socket.io-client';

import debug from '../lib/logger';
import { actions } from './store';

const log = debug('WS');

const initWebSocket = (store) => {
  const wsConnection = socket('/');

  wsConnection.on('connect', () => {
    log('CONNECTED');
  });

  wsConnection.on('disconnect', () => {
    log('DISCONNECTED');
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
};

export default initWebSocket;
