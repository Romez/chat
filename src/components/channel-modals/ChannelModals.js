import React, { memo } from 'react';
import { Modal } from 'react-bootstrap';

import Add from './Add';

const forms = {
  adding: Add,
};

const getForm = (type) => forms[type];

const ChannelModals = ({ type, hideModal }) => {
  const ModalForm = getForm(type);

  return (
    <Modal autoFocus show={!!type} onHide={hideModal}>
      {type && <ModalForm hideModal={hideModal} />}
    </Modal>
  );
};

export default memo(ChannelModals);
