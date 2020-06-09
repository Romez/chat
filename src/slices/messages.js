/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import gon from 'gon';

const slice = createSlice({
  name: 'messages',
  initialState: gon.messages,
  reducers: {
    addMessage: (state, { payload }) => {
      state.push(payload);
    },
  },
});

export const { actions } = slice;

export default slice.reducer;
