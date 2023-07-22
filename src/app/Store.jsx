import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../features/counter/CounterSlice";
import PostSlice from "../features/post/PostSlice";

export const store = configureStore({
    reducer: {
        counter: CounterSlice,
        posts : PostSlice
    }
})