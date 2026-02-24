import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./slice/apiSlice";
import todoReducer from "./slice/todo";
import postReducer from "./slice/post";
import albumReducer from "./slice/albums";
import photosReducer from "./slice/photos";
import usersReducer from "./slice/users";

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        post: postReducer,
        album: albumReducer,
        photos: photosReducer,
        users: usersReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});