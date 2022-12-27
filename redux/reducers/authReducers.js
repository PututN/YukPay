import { createSlice } from "@reduxjs/toolkit";

import { LoginAction, SignupAction } from "../actions/authAction";

const initialState = {
  loading: false,
  token: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.token = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (build) => {
    build.addCase(LoginAction.pending, (state, action) => {
      state.loading = true;
    });
    build.addCase(LoginAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    build.addCase(LoginAction.fulfilled, (state, action) => {
      state.token = action.payload;
      state.error = null;
      state.loading = false;
    });
    build.addCase(SignupAction.pending, (state, action) => {
      state.loading = true;
    });
    build.addCase(SignupAction.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    build.addCase(SignupAction.fulfilled, (state, action) => {
      state.token = action.payload;
      state.error = null;
      state.loading = false;
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
