import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import socket from 'socket.io-client';

import debug from '../../lib/logger';

const log = debug('WS');

const wsConnection = socket('/', { autoConnect: false });

const useMessagesSocket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    wsConnection.open();

    wsConnection.on('connect', () => {
      log('CONNECTED');
    });

    wsConnection.on('disconnect', () => {
      log('DISCONCT');
    });

    return () => {
      wsConnection.close();
    };
  }, [dispatch]);

  return wsConnection;
};

export default useMessagesSocket;
