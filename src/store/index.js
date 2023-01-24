import { configureStore } from "@reduxjs/toolkit";
import { chapterReducer } from "./chapter-slice";

const store = configureStore({
  reducer: { chapter: chapterReducer },
});

export default store;
