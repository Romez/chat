// @ts-check
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { ReactDOM } from 'react';

import '../assets/application.scss';

// import faker from 'faker';
import gon from 'gon';
// import cookies from 'js-cookie';
// import io from 'socket.io-client';
import App from './App';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

ReactDOM.render(App, document.getElementById('chat'));

console.log('it works!');
console.log('gon', gon);
