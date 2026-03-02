import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state, action) => {
            state.value += 1;
        },
        decrement: (state, action) => {
            state.value -= 1;
        },
        reset: (state, action) => {
            state.value = 0;
        }
    }
})
export const { increment, decrement, reset } = CounterSlice.actions;
export default CounterSlice.reducer;