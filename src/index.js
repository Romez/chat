import 'regenerator-runtime/runtime';
import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import gon from 'gon';

import '../assets/application.scss';
import './setupLocalization';
import App from './App';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

ReactDOM.render(<App channels={gon.channels} />, document.getElementById('chat'));
