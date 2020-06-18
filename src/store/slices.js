/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import gon from 'gon';

export const messagesSlice = createSlice({
  name: 'messages',
  initialState: gon.messages,
  reducers: {
    addMessage: (state, { payload }) => {
      state.push(payload);
    },
    removeMessagesByChannelId: (state, { payload }) => {
      return state.filter(({ channelId }) => channelId !== payload.channelId);
    },
  },
});

export const channelsSlice = createSlice({
  name: 'channels',
  initialState: {
    channels: gon.channels,
    currentChannelId: gon.currentChannelId,
  },
  reducers: {
    addChannel: (state, { payload }) => {
      state.channels.push(payload);
    },
    renameChannel: (state, { payload }) => {
      const channel = state.channels.find(({ id }) => id === payload.id);
      channel.name = payload.name;
    },
    removeChannel: (state, { payload }) => {
      state.channels = state.channels.filter(({ id }) => id !== payload.id);
    },
    switchToChannel: (state, { payload }) => {
      state.currentChannelId = payload.channelId;
    },
  },
});
