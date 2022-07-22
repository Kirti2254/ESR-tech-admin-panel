import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    authors: [],
    author: {},
  },
};

export const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {
    setAuthors: (state, action) => {
      state.value.users = action.payload;
    },
    setAuthor: (state, action) => {
      state.value.user = action.payload;
    },
    defaultState: (state) => {
      state.authors = initialState.users;
      state.author = initialState.user;
    },
  },
});

export const { setAuthors } = authorSlice.actions;

export default authorSlice.reducer;
