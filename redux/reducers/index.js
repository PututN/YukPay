import {combineReducers} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducers from './authReducers'
import transferReducers from "./transferReducers"

const persistConfig = {
  key: "auth",
  storage
}
const reducer = combineReducers({
  auth: persistReducer(persistConfig, authReducers),
  transfer : transferReducers
})

export default reducer