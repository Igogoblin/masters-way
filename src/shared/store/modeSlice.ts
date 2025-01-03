import { createSlice } from "@reduxjs/toolkit";

export const modeSlice = createSlice({
  name: "mode",
  initialState: {
    language: "en",
  },
  reducers: {
    toggleTheme: (state) => {
      state.language = state.language === "en" ? "ru" : "en";
    },
  },
});

export const { toggleTheme } = modeSlice.actions;

export default modeSlice.reducer;
