import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: "",
    color: "",
  },
  reducers: {
    SET_MODE(state, action) {
      state.mode = action.payload;
      // console.log("updated");
    },
    SET_COLOR(state, action) {
      state.color = action.payload;
    },
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice;
