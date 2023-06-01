import { addProductType } from '@/types/addProduct/addProduct.types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export const initialDescription = {
  title: '',
  category: '',
  state: '',
  stock: 0,
  length: 0,
  width: 0,
  height: 0,
  price: 0,
  description: '',
};

const initialState: addProductType = {
  description: initialDescription,
  photos: [],
  delivery: 'CABA-C1044',
};

const { actions, reducer } = createSlice({
  name: 'addProduct',
  initialState,
  reducers: {
    setDescription: (state: any, { payload }: PayloadAction<any>) => {
      state.description = { ...state.description, ...payload };
    },
    setPhotos: (state: any, { payload }: PayloadAction<any>) => {
      state.photos = payload;
    },
    setDelivery: (state: any, { payload }: PayloadAction<any>) => {
      state.delivery = payload;
    },
  },
});

export const { setDescription, setPhotos, setDelivery } = actions;

export const getDescription = (state: any) => state.addProduct.description;
export const getPhotos = (state: any) => state.addProduct.photos;
export const getDelivery = (state: any) => state.addProduct.delivery;

export default reducer;
