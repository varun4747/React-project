import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./slices/CounterSlice";
const store=configureStore({
    reducer:{
        counter:CounterReducer,
    },
    devTools:true,
})

export default store;