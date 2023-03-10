import { Theme } from "./../../Constants/@types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  theme: Theme.Light,
};

const themeSlice = createSlice({
  name: "themeReducer",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
const themeReducer = themeSlice.reducer;
export default themeReducer;
