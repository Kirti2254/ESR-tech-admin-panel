import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    users: [],
    user: {},
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.value.users = action.payload;
    },
    setUser: (state, action) => {
      state.value.user = action.payload;
    },
    defaultState: (state) => {
      state.users = initialState.users;
      state.user = initialState.user;
    },
  },
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;
