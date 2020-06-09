/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import gon from 'gon';

const slice = createSlice({
  name: 'currentChannelId',
  initialState: gon.currentChannelId,
  reducers: {
    switchToChannel: (_, { payload }) => payload.channelId,
  },
});

export const { actions } = slice;

export default slice.reducer;
