import { createSelector } from '@reduxjs/toolkit';

export const selectChannels = (store) => store.chat.channels;

export const selectCurrentChannelId = (store) => store.chat.currentChannelId;

const selectAllMessages = (store) => store.chat.messages;

export const selectMessages = createSelector([selectAllMessages, selectCurrentChannelId], (messages, channelId) => {
  return messages.filter((message) => message.channelId === channelId);
});
