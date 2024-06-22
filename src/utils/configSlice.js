import { createSlice } from "@reduxjs/toolkit";

const confingSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLanguage } = confingSlice.actions;

export default confingSlice.reducer;
