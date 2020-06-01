import React, { memo } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

import { selectChannels, selectCurrentChannelId } from '../../store';
import { actions } from '../../slices';

const Channels = () => {
  const dispatch = useDispatch();
  const channels = useSelector(selectChannels);
  const currentChannelId = useSelector(selectCurrentChannelId);

  const createClickHandler = (id) => () => {
    dispatch(actions.switchToChannel(id));
  };

  return (
    <ListGroup as="ul" variant="flush">
      {channels.map(({ id, name }) => {
        return (
          <ListGroup.Item
            action
            active={id === currentChannelId}
            key={id}
            onClick={createClickHandler({ channelId: id })}
          >
            {name}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default memo(Channels);
