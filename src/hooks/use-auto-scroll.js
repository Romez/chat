import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectMessages } from '../store';

export const useAutoScroll = (messagesRef) => {
  const messages = useSelector(selectMessages);

  useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [messagesRef, messages]);
};
