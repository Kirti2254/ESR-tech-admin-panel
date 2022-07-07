import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query"

import { authApi } from "./components/pages/loginpage/reducers/authApi";
import authReducer from "./components/pages/loginpage/reducers/authSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    // middleware: (getDefaultMiddleware) => {
    //     getDefaultMiddleware({ serializableCheck: false }).concat(
    //         authApi.middleware
    //     )
    // }
})

setupListeners(store.dispatch);

export default store;