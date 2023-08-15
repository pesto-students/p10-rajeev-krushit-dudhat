import { configureStore } from '@reduxjs/toolkit';
import stepsReducer from './action/steps';


// Automatically adds the thunk middleware and the Redux DevTools extension
const store = configureStore({
  // Automatically calls `combineReducers`
  reducer: {
    steps: stepsReducer,
  }
});

export default store;