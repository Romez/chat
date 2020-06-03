import React, { memo, useMemo, useState, useCallback } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { store } from './store';
import { UserProvider } from './contexts/user';
import getCurrentNickname from './utils/getCurrentNickname';
import { Channels, Chat, ChannelModals } from './components';

const App = () => {
  const { t } = useTranslation();
  const nickname = useMemo(getCurrentNickname, []);

  const [modalInfo, setModalInfo] = useState({ type: null, channel: null });
  const hideModal = useCallback(() => setModalInfo({ type: null, channel: null }), [setModalInfo]);
  const showModal = useCallback((type, channel = null) => setModalInfo({ type, channel }), []);

  const showAddModal = useCallback(() => {
    showModal('adding');
  }, [showModal]);

  return (
    <Provider store={store}>
      <UserProvider value={{ nickname }}>
        <Container className="h-100 pb-3">
          <Row className="h-100 bg-dark text-white">
            <Col sm="3" className="border-right pt-2">
              <h3>{t('channels.title')}</h3>
              <Button onClick={showAddModal} className="mb-3" variant="outline-light">
                {t('channels.add')}
              </Button>
              <Channels />
            </Col>
            <Col className="h-100 pt-2">
              <Chat />
            </Col>
          </Row>
        </Container>
        <ChannelModals type={modalInfo.type} channel={modalInfo.channel} hideModal={hideModal} />
      </UserProvider>
    </Provider>
  );
};

export default memo(App);
