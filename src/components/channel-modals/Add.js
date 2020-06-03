import React, { memo, useCallback, useRef, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { post } from 'axios';

import routes from '../../routes';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
});

const AddModal = ({ hideModal }) => {
  const { t } = useTranslation();

  const handleSubmit = useCallback(
    async ({ name }, form) => {
      const payload = { data: { attributes: { name } } };
      const url = routes.channelsPath();

      try {
        await post(url, payload);
        hideModal();
        return true;
      } catch (error) {
        form.setErrors({ message: error.message });
        return false;
      }
    },
    [hideModal],
  );

  const form = useFormik({
    initialValues: { name: '' },
    onSubmit: handleSubmit,
    validationSchema,
  });

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{t('channels.modals.add.title')}</Modal.Title>
      </Modal.Header>

      <Form onSubmit={form.handleSubmit}>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              ref={inputRef}
              name="name"
              isInvalid={!!form.errors.name}
              disabled={form.isSubmitting}
              onChange={form.handleChange}
              value={form.values.name}
            />
            <Form.Control.Feedback type="invalid">{form.errors.name}</Form.Control.Feedback>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={hideModal}>
            {t('channels.modals.close')}
          </Button>
          <Button variant="primary" type="submit">
            {t('channels.modals.submit')}
          </Button>
        </Modal.Footer>
      </Form>
    </>
  );
};

export default memo(AddModal);
