import React, { memo } from 'react';

const App = ({ channels }) => {
  return (
    <ul>
      {channels.map(({ name, id }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

export default memo(App);
