import { combineReducers } from 'redux';

import channels, { actions as channelsActions } from './channels';
import messages, { actions as messagesActions } from './messages';
import currentChannelId, { actions as currentChannelIdActions } from './currentChannelId';

const actions = { ...channelsActions, ...messagesActions, ...currentChannelIdActions };

export default combineReducers({ channels, messages, currentChannelId });
export { actions };
