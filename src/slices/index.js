import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import channels, { actions as channelsActions } from './channels';
import messages, { actions as messagesActions } from './messages';
import currentChannelId, { actions as currentChannelIdActions } from './currentChannelId';

export * from './selectors';

const actions = { ...channelsActions, ...messagesActions, ...currentChannelIdActions };
export { actions };

const reducer = combineReducers({ channels, messages, currentChannelId });

export const store = configureStore({ reducer });
