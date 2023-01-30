import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "test",
  initialState: {
    testResult: [],
  },
  reducers: {
    setTestResult: (state, action) => {
      state.testResult = action.payload;
    },
  },
});

export const testReducer = testSlice.reducer;
export const testActions = testSlice.actions;
