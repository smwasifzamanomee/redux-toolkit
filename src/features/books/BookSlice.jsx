import { createSlice } from "@reduxjs/toolkit"

const initailState = {
    books: [
        {   id: 1,  title: 'Bangladesh', author: 'omee' },
        {   id: 2,  title: 'India', author: 'omee' },
    ]
}

export const bookSlice = createSlice({
    name: 'books',
    initialState: initailState,
    reducers: {
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        deleteBook: (state, action) => {
            state.books = state.books.filter(book => book.id !== action.payload)
        },
        updateBook: (state, action) => {
            const index = state.books.findIndex(book => book.id === action.payload.id)
            state.books[index] = action.payload
        }
    }
})

export const { addBook, deleteBook, updateBook } = bookSlice.actions
export default bookSlice.reducer
