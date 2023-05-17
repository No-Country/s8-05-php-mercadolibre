import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type registerState = {
  step: string;
};

const initialState: registerState = {
  step: "1",
};

const { actions, reducer } = createSlice({
  name: "register",
  initialState,
  reducers: {
    setStep: (state: registerState, { payload }: PayloadAction<any>) => {
      state.step = payload;
    },
  },
});

export const { setStep } = actions;

export default reducer;
