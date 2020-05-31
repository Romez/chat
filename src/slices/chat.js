import { createSlice } from '@reduxjs/toolkit';
import gon from 'gon';

const slice = createSlice({
  name: 'chat',
  initialState: gon,
  reducers: {
    addMessage: (state, { payload }) => {
      state.messages.push(payload);
    },
  },
});

export const { actions } = slice;

export default slice.reducer;
