import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const LoginAction = createAsyncThunk(
  "auth/Login",
  async ({ email, password, cb }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        "https://68xkph-8888.preview.csb.app/auth/login",
        { email, password },
        config
      );
      cb();
      return res.data.results.token;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);


export const SignupAction = createAsyncThunk(
  "auth/sign-up",
  async (
    { firstName, email, password, lastName, cb },
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        "https://68xkph-8888.preview.csb.app/auth/register",
        { firstName, email, password, lastName },
        config
      );
      cb();
      return res.data.results.token;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);


