import React, { memo, useMemo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { store } from './store';
import { UserProvider } from './contexts/user';
import getCurrentNickname from './utils/getCurrentNickname';
import { Channels, Chat } from './components';

const App = () => {
  const { t } = useTranslation();
  const nickname = useMemo(getCurrentNickname, []);

  return (
    <Provider store={store}>
      <UserProvider value={{ nickname }}>
        <Container className="h-100 pb-3">
          <Row className="h-100 bg-dark text-white">
            <Col sm="3" className="border-right pt-2">
              <h3>{t('channels.title')}</h3>
              <Channels />
            </Col>
            <Col className="h-100 pt-2">
              <Chat />
            </Col>
          </Row>
        </Container>
      </UserProvider>
    </Provider>
  );
};

export default memo(App);
