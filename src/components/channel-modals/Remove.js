import React, { useCallback, useState } from 'react';
import { Modal, Form, Button, Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

import routes from '../../routes';

const Remove = ({ hideModal, channel }) => {
  const { t } = useTranslation();

  const [formState, setFormState] = useState({ isSubmitting: false, error: '' });

  const handleSubmit = useCallback(async () => {
    setFormState(() => ({ isSubmitting: true, error: '' }));

    const url = routes.channelPath(channel.id);

    try {
      await axios.delete(url);
      setFormState((state) => ({ ...state, isSubmitting: false }));
      hideModal();
    } catch (error) {
      setFormState(() => ({ isSubmitting: false, error: error.message }));
    }
  }, [channel.id, hideModal]);

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>{t('channels.modals.remove.title')}</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <p>{t('channels.modals.remove.description')}</p>
          <p className="text-danger">{formState.error}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={hideModal}>
            {t('channels.modals.close')}
          </Button>
          <Button variant="danger" type="submit" disabled={formState.isSubmitting}>
            <Spinner
              hidden={!formState.isSubmitting}
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
              variant="info"
            />
            {t(formState.isSubmitting ? 'channels.modals.remove.loading' : 'channels.modals.remove.submit')}
          </Button>
        </Modal.Footer>
      </Form>
    </>
  );
};

export default Remove;
