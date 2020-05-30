import 'regenerator-runtime/runtime';
import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import gon from 'gon';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';
// import faker from 'faker';

import '../assets/application.scss';
import App from './App';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

ReactDOM.render(<App channels={gon.channels} />, document.getElementById('chat'));
