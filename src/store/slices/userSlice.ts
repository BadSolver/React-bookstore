import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  email: string | null;
  userDate: string | null;
  id: string | null;
  theme: string;
}

const initialState: UserState = {
  email: null,
  userDate: null,
  id: null,
  theme: 'light',
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
    setThemesDark() {
      const htmlteg = document.documentElement;
      htmlteg.setAttribute('theme', 'dark')
    },
    setThemesLight() {
      const htmlteg = document.documentElement;
      htmlteg.setAttribute('theme', 'light')
    }
  },
});

export const { setUser, removeUser, setThemesDark, setThemesLight } = userSlice.actions;

export default userSlice.reducer;
