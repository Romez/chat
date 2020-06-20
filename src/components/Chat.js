import React, { useContext, useRef, useCallback, useLayoutEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { post } from 'axios';
import useStayScrolled from 'react-stay-scrolled';

import routes from '../routes';
import { UserContext } from '../contexts/user';
import { selectMessages, selectCurrentChannelId } from '../store';

const validationSchema = Yup.object().shape({
  message: Yup.string().required('Required'),
});

const Chat = () => {
  const messages = useSelector(selectMessages);
  const currentUser = useContext(UserContext);
  const currentChannelId = useSelector(selectCurrentChannelId);

  const messagesRef = useRef();
  const { stayScrolled } = useStayScrolled(messagesRef, { initialScroll: Infinity });
  useLayoutEffect(() => {
    stayScrolled();
  }, [stayScrolled, messages.length]);

  const sendMessage = useCallback(
    async ({ message }, form) => {
      const payload = { data: { attributes: { message, nickname: currentUser.nickname } } };
      const url = routes.channelMessagesPath(currentChannelId);

      try {
        const res = await post(url, payload);
        form.resetForm();
        return res.data;
      } catch (error) {
        form.setErrors({ message: error.message });
        return false;
      }
    },
    [currentUser.nickname, currentChannelId],
  );

  const form = useFormik({
    initialValues: { message: '' },
    onSubmit: sendMessage,
    validationSchema,
  });

  return (
    <div className="d-flex flex-column h-100">
      <div className="overflow-auto mb-3" ref={messagesRef}>
        {messages.map(({ id, nickname, message }) => (
          <div key={id}>
            <b>{`${nickname}: `}</b>
            {message}
          </div>
        ))}
      </div>

      <Form onSubmit={form.handleSubmit} className="mt-auto">
        <Form.Group>
          <Form.Control
            name="message"
            isInvalid={!!form.errors.message}
            disabled={form.isSubmitting}
            onChange={form.handleChange}
            value={form.values.message}
          />
          {form.errors.message && <Form.Control.Feedback type="invalid">{form.errors.message}</Form.Control.Feedback>}
        </Form.Group>
      </Form>
    </div>
  );
};

export default Chat;
