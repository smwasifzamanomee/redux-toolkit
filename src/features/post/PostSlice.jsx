import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return response.data
    }
)


export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        loading: false,
        error : null
    },
    extraReducers : (builder) =>  {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.loading = true
        }
        )
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
        }
        )
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        }
        )
    }

})

export default postSlice.reducer