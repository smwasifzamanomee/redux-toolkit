import { configureStore } from "@reduxjs/toolkit";
import BookReducer from "../features/books/BookSlice";

export const Store = configureStore({
    reducer: {
        books: BookReducer
    }
})