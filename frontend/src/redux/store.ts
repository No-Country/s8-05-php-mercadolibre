import { configureStore, combineReducers } from '@reduxjs/toolkit';
import register from './registerSlice';
import addProduct from './addProduct';
import buy from './buy';

const store = configureStore({
  reducer: combineReducers({
    register,
    addProduct,
    buy,
  }),
});

export default store;
