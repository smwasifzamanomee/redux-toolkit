import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({

    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count = state.count + 1
        },
        decrement: (state) => {
            state.count = state.count - 1
        },
        reset: (state) => {
            state.count = 0
        },
        incrementByAmount: (state, action) => {
            state.count = state.count + action.payload
        }
    }

})

export const { increment, decrement, reset, incrementByAmount } = CounterSlice.actions

export default CounterSlice.reducer

