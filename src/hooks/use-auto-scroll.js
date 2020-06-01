import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectMessages } from '../store';

const useAutoScroll = (messagesRef) => {
  const messages = useSelector(selectMessages);

  useEffect(() => {
    messagesRef.current.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messagesRef, messages]);
};

export default useAutoScroll;
