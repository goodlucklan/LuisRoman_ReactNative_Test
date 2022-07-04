import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    loggingIn: (state) => {
      state.user = true;
    },
    loggingOut: (state) => {
      state.user = null;
    },
  },
});

export const { loggingIn, loggingOut } = authSlice.actions;
export default authSlice.reducer;
