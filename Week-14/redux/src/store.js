import { configureStore } from '@reduxjs/toolkit';
import roomsReducer from './action/rooms';


// Automatically adds the thunk middleware and the Redux DevTools extension
const store = configureStore({
  // Automatically calls `combineReducers`
  reducer: {
    rooms: roomsReducer,
  }
});

export default store;