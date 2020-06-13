import { createSlice } from '@reduxjs/toolkit';
import gon from 'gon';

export const messagesSlice = createSlice({
  name: 'messages',
  initialState: gon.messages,
  reducers: {
    addMessage: (state, { payload }) => {
      state.push(payload);
    },
  },
});

export const channelsSlice = createSlice({
  name: 'channels',
  initialState: gon.channels,
  reducers: {
    addChannel: (state, { payload }) => {
      state.push(payload);
    },
    renameChannel: (state, { payload }) => {
      const channel = state.find(({ id }) => id === payload.id);
      channel.name = payload.name;
    },
    removeChannel: (state, { payload }) => state.filter(({ id }) => id !== payload.id),
  },
});

export const currentChannelIdSlice = createSlice({
  name: 'currentChannelId',
  initialState: gon.currentChannelId,
  reducers: {
    switchToChannel: (_, { payload }) => payload.channelId,
  },
});
