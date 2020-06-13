/* eslint-disable no-param-reassign */
import { combineReducers } from 'redux';

import { channelsSlice, messagesSlice, currentChannelIdSlice } from './slices';

export * from './selectors';

export const actions = {
  ...channelsSlice.actions,
  ...messagesSlice.actions,
  ...currentChannelIdSlice.actions,
};

export default combineReducers({
  channels: channelsSlice.reducer,
  messages: messagesSlice.reducer,
  currentChannelId: currentChannelIdSlice.reducer,
});
