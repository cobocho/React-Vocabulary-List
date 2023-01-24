import { createSlice } from "@reduxjs/toolkit";

const chapterSlice = createSlice({
  name: "chapter",
  initialState: {
    addMode: false,
  },
  reducers: {
    setAddMode: (state) => {
      state.addMode = true;
      console.log("chapter add mode");
    },
    clearAddMode: (state) => {
      state.addMode = false;
      console.log("chapter add mode");
    },
  },
});

export const chapterReducer = chapterSlice.reducer;
export const chapterActions = chapterSlice.actions;
