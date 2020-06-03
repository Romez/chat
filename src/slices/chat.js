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
    switchToChannel: (state, { payload }) => {
      state.currentChannelId = payload.channelId;
    },
  },
});

export const { actions } = slice;

export default slice.reducer;
