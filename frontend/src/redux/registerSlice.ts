import { type completeKey, type registerState } from '@/types/slice/register.types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: registerState = {
  step: 1,
  complete: {
    email: false,
    user: false,
    phone: false,
    password: false,
  },
  data: {
    email: null,
    name: null,
    lastName: null,
    phone: null,
    password: null,
  },
};

const { actions, reducer } = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setStep: (state: registerState, { payload }: PayloadAction<any>) => {
      state.step = payload;
    },
    setComplete: (state: registerState, { payload }: PayloadAction<completeKey>) => {
      state.complete[payload] = true;
    },
    setData: (state: registerState, { payload }: PayloadAction<any>) => {
      state.data = { ...state.data, ...payload };
    },
  },
});

export const { setStep, setComplete, setData } = actions;

export const getStep = (state: any) => state.register.step;
export const getComplete = (state: any) => state.register.complete;
export const getData = (state: any) => state.register.data;

export default reducer;
