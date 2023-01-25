import { configureStore } from "@reduxjs/toolkit";
import { chapterReducer } from "./chapter-slice";
import { wordReducer } from "./word-slice";

const store = configureStore({
  reducer: { chapter: chapterReducer, word: wordReducer },
});

export default store;
