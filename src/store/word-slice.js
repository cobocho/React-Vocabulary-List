import { createSlice } from "@reduxjs/toolkit";

const wordSlice = createSlice({
  name: "word",
  initialState: {
    parts: [
      { type: "noun", desc: "명사" },
      { type: "pronoun", desc: "대명사" },
      { type: "verb", desc: "동사" },
      { type: "adjective", desc: "형용사" },
      { type: "adverb", desc: "부사" },
      { type: "preposition", desc: "전치사" },
      { type: "conjunction", desc: "접속사" },
      { type: "interjection", desc: "감탄사" },
    ],
    selectedPart: null,
  },
  reducers: {
    setSelectedPart: (state, action) => {
      state.selectedPart = action.payload;
    },
  },
});

export const wordReducer = wordSlice.reducer;
export const wordActions = wordSlice.actions;
