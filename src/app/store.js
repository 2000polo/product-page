import { configureStore } from "@reduxjs/toolkit";
import foodSlice from '../slices/foods'

console.log(foodSlice)

const store = configureStore({
    reducer: {
        foodSlice: foodSlice,
    }
})

export default store;