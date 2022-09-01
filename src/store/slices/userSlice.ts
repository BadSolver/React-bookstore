import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  userDate: null,
  id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.userDate = action.payload.userDate;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.userDate = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
