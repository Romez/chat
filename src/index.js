import 'regenerator-runtime/runtime';
import 'core-js';

import '../assets/application.scss';
import './setupLocalization';
import run from './init';

if (process.env.NODE_ENV !== 'production') {
  localStorage.debug = 'chat:*';
}

run();
