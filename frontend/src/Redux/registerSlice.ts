import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type registerState = {
  step: number;
  complete: {
    mail: boolean;
    user: boolean;
    phone: boolean;
    password: boolean;
  };
};

const initialState: registerState = {
  step: 1,
  complete: {
    mail: false,
    user: false,
    phone: false,
    password: false,
  },
};

type completeKey = keyof registerState["complete"];

const { actions, reducer } = createSlice({
  name: "register",
  initialState,
  reducers: {
    setStep: (state: registerState, { payload }: PayloadAction<any>) => {
      state.step = payload;
    },
    setComplete: (state: registerState, { payload }: PayloadAction<completeKey>) => {
      state.complete[payload] = true;
    },
  },
});

export const { setStep, setComplete } = actions;

export const getStep = (state: any) => state.register.step;
export const getComplete = (state: any) => state.register.complete;

export default reducer;
