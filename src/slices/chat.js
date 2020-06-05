/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import gon from 'gon';

const slice = createSlice({
  name: 'chat',
  initialState: gon,
  reducers: {
    addMessage: (state, { payload }) => {
      state.messages.push(payload);
    },
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

export const { actions } = slice;

export default slice.reducer;
