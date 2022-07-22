import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { authApi } from "./components/pages/loginpage/reducers/authApi";
import authReducer from "./components/pages/loginpage/reducers/authSlice";

import { userApi } from "./components/pages/reducers/userReducer/userApi";
import userReducer from "./components/pages/reducers/userReducer/userSlice";
import { authorApi } from "./components/pages/reducers/authorReducer/authorApi";
import authorReducer from "./components/pages/reducers/authorReducer/authorSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
    author: authorReducer,
    [authorApi.reducerPath]: authorApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      authApi.middleware,
      userApi.middleware,
      authorApi.middleware
    ),
});

setupListeners(store.dispatch);

export default store;
