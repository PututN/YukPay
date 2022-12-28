import { createSlice } from "@reduxjs/toolkit";

import { transferAction } from "../actions/transferAction";

const initialState = {
  amount: null,
  notes: "",
  recipientId: null,
  pin: "",
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    transferInput: (state, action) => {
      const { amount, notes, recipientId } = action.payload;
      state = {
        ...state,
        ...{ amount, notes, recipientId },
      };
      return state;
    },
    pinInput: (state, action) => {
      const { pin } = action.payload;
      state = {
        ...state,
        ...{ pin },
      };
      return state;
    },
  },
  extraReducers: (build) => {},
});

export const { transferInput, pinInput } = transactionSlice.actions;
export default transactionSlice.reducer;
