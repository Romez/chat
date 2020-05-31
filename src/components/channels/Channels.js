import React, { memo } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { selectChannels, selectCurrentChannelId } from '../../store';

const Channels = () => {
  const channels = useSelector(selectChannels);
  const currentChannelId = useSelector(selectCurrentChannelId);

  return (
    <ListGroup as="ul" variant="flush">
      {channels.map(({ id, name }) => {
        return (
          <ListGroup.Item variant="dark" as="li" active={id === currentChannelId} key={id}>
            {name}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default memo(Channels);
