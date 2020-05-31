import { combineReducers } from 'redux';

import chat, { actions as chatActions } from './chat';

const actions = { ...chatActions };

export default combineReducers({ chat });
export { actions };
