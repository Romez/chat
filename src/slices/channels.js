/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import gon from 'gon';

const slice = createSlice({
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

export const { actions } = slice;

export default slice.reducer;
