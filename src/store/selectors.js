import { createSelector } from '@reduxjs/toolkit';

export const selectChannels = (store) => store.channels;

export const selectCurrentChannelId = (store) => store.currentChannelId;

const selectAllMessages = (store) => store.messages;

export const selectMessages = createSelector([selectAllMessages, selectCurrentChannelId], (messages, channelId) => {
  return messages.filter((message) => message.channelId === channelId);
});
