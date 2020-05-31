import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import socket from 'socket.io-client';

import { actions } from '../slices';
import debug from '../../lib/logger';
const log = debug('WS');

const wsConnection = socket('/', { autoConnect: false });

export const useMessagesSocket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    wsConnection.open();

    wsConnection.on('connect', () => {
      log('CONNECTED');
    });

    wsConnection.on('disconnect', () => {
      log('DISCONCT');
    });

    wsConnection.on('newMessage', ({ data }) => {
      const { attributes } = data;
      dispatch(actions.addMessage(attributes));
    });

    return () => {
      wsConnection.close();
    };
  }, [dispatch]);
};
