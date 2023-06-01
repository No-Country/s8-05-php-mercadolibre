import { initialLocationType, initialPayType, initialStateType } from '@/types/slice/buy.types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export const initialLocation: initialLocationType = {
  name: '',
  code: '',
  province: '',
  city: '',
  address: '',
  houseNumber: '',
  floor: '',
  phone: 0,
  aditionalDescription: '',
};

export const initialPay: initialPayType = {
  cardNumber: 0,
  expiration: '',
  cvv: 0,
  name: '',
  dni: '',
};

const initialState: initialStateType = {
  location: initialLocation,
  delivery: '',
  pay: initialPay,
};

const { actions, reducer } = createSlice({
  name: 'buy',
  initialState,
  reducers: {
    setLocation: (state: any, { payload }: PayloadAction<any>) => {
      state.location = payload;
    },
    setDelivery: (state: any, { payload }: PayloadAction<string>) => {
      state.delivery = payload;
    },
    setPay: (state: any, { payload }: PayloadAction<any>) => {
      state.pay = { ...state.pay, ...payload };
    },
  },
});

export const { setLocation, setDelivery, setPay } = actions;

export const getLocation = (state: any) => state.buy.location;
export const getDelivery = (state: any) => state.buy.delivery;
export const getPay = (state: any) => state.buy.pay;

export default reducer;
