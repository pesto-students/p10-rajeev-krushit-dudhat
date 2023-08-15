import { createSlice } from '@reduxjs/toolkit';

const roomSlice = createSlice({
  name: 'rooms',
  initialState: {
    isLightOn: true,
  },
  reducers: {
    toggleLight: (state, action) => {
      state.isLightOn = !state.isLightOn;
    }
  }
});

export const { toggleLight } = roomSlice.actions;
export default roomSlice.reducer;
