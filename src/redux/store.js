import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "./slice/todo";
import postReducer from "./slice/post";


export const store = configureStore({
    reducer: {
        todo: todoReducer,
        post:postReducer,
    }
})