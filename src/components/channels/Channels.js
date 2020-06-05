import React, { memo, useEffect, useCallback } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { selectChannels, selectCurrentChannelId } from '../../store';
import { actions } from '../../slices';
import { useMessagesSocket } from '../../hooks';

const Channels = ({ showModal }) => {
  const wsConnection = useMessagesSocket();
  const dispatch = useDispatch();
  const channels = useSelector(selectChannels);
  const currentChannelId = useSelector(selectCurrentChannelId);

  useEffect(() => {
    wsConnection.on('newChannel', ({ data }) => {
      const { attributes } = data;
      dispatch(actions.addChannel(attributes));
    });

    wsConnection.on('renameChannel', ({ data }) => {
      const { attributes } = data;
      dispatch(actions.renameChannel(attributes));
    });

    wsConnection.on('removeChannel', ({ data }) => {
      const { id } = data;
      dispatch(actions.removeChannel({ id }));
    });
  }, [dispatch, wsConnection]);

  const switchToChannel = useCallback(
    (id) => {
      dispatch(actions.switchToChannel({ channelId: Number(id) }));
    },
    [dispatch],
  );

  const openRenameModal = (id) => (e) => {
    e.stopPropagation();
    const channel = channels.find((ch) => ch.id === id);
    showModal('renaming', channel);
  };

  const openRemoveModal = (id) => (e) => {
    e.stopPropagation();
    const channel = channels.find((ch) => ch.id === id);
    showModal('removing', channel);
  };

  return (
    <Nav activeKey={currentChannelId} onSelect={switchToChannel} className="flex-column" justify fill variant="pills">
      {channels.map(({ id, name, removable }) => (
        <Nav.Item key={id} as="btn-group">
          <Nav.Link eventKey={id}>
            <div className="d-flex justify-content-between align-items-center">
              <div>{name}</div>
              <div>
                <Button
                  className="fas fa-edit rounded-circle"
                  variant="outline-success"
                  size="sm"
                  onClick={openRenameModal(id)}
                />
                {removable && (
                  <Button
                    className="fas fa-trash-alt ml-2 rounded-circle"
                    variant="outline-danger"
                    size="sm"
                    onClick={openRemoveModal(id)}
                  />
                )}
              </div>
            </div>
          </Nav.Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default memo(Channels);
