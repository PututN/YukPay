import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducers from "./authReducers";
import transferReducers from "./transferReducers";
// import profileReducers from './profileReducers'

const persistConfig = {
  key: "auth",
  storage,
};
const transferConfig = {
  key: "transfer",
  storage,
};
const reducer = combineReducers({
  auth: persistReducer(persistConfig, authReducers),
  transfer: persistReducer(transferConfig, transferReducers),
  // profile:profileReducers
});

export default reducer;
