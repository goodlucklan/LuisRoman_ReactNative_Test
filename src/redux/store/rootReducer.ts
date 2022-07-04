import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counter";
import authReducer from "../reducers/auth";

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
