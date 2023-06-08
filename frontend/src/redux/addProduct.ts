import { addProductType, descriptionType } from '@/types/slice/addProduct.types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export const initialDescription: descriptionType = {
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
  delivery: {
    delivery: false,
    local: false,
  },
};

const { actions, reducer } = createSlice({
  name: 'addProduct',
  initialState,
  reducers: {
    setDescription: (state: any, { payload }: PayloadAction<descriptionType>) => {
      state.description = payload;
    },
    setPhotos: (state: any, { payload }: PayloadAction<File[]>) => {
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
