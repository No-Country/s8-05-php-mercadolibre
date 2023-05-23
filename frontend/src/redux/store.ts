import { configureStore, combineReducers } from '@reduxjs/toolkit';
import register from './registerSlice';

const store = configureStore({
  reducer: combineReducers({
    register,
  }),
});

export default store;
