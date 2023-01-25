import { createSlice } from "@reduxjs/toolkit";

const chapterSlice = createSlice({
  name: "chapter",
  initialState: {
    addMode: false,
    chapters: [],
  },
  reducers: {
    setAddMode: (state) => {
      state.addMode = true;
    },

    clearAddMode: (state) => {
      state.addMode = false;
    },

    setChapters: (state, action) => {
      state.chapters = action.payload;
    },

    addChapter: (state, action) => {
      state.chapters.push({
        title: action.payload,
        words: [],
        amount: 0,
        finished: 0,
      });
      localStorage.setItem("chapters", JSON.stringify(state.chapters));
    },

    changeChapterTtile: (state, action) => {
      for (const chapter of state.chapters) {
        if (chapter.title === action.payload.existingTitle) {
          chapter.title = action.payload.changedTitle;
          break;
        }
      }
      localStorage.setItem("chapters", JSON.stringify(state.chapters));
    },

    deleteChapter: (state, action) => {
      state.chapters = state.chapters.filter((chapter) => {
        return chapter.title !== action.payload;
      });
      localStorage.setItem("chapters", JSON.stringify(state.chapters));
    },

    addWord: (state, action) => {
      for (const chapter of state.chapters) {
        if (chapter.title === action.payload.title) {
          chapter.words.push(action.payload);
          break;
        }
      }
    },
  },
});

export const chapterReducer = chapterSlice.reducer;
export const chapterActions = chapterSlice.actions;
