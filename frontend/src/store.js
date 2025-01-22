import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice'; // Example slice

const store = configureStore({
  reducer: {
    counter: counterReducer, // Add reducers here
  },
});

export default store;