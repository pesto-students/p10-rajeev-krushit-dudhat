import { createSlice } from '@reduxjs/toolkit';

const stepSlice = createSlice({
  name: 'steps',
  initialState: {
    count: 0,
  },
  reducers: {
    incSteps: (state, action) => {
      state.count = state.count + 1;
    },

    resetSteps: (state, action) => {
      state.count = 0;
    },
  }
});

export const { incSteps, resetSteps } = stepSlice.actions;
export default stepSlice.reducer;
