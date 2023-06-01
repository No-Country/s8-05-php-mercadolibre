import { configureStore, combineReducers } from '@reduxjs/toolkit';
import register from './registerSlice';
import addProduct from './addProduct';

const store = configureStore({
  reducer: combineReducers({
    register,
    addProduct,
  }),
});

export default store;
