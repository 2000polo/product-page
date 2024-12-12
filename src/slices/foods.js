import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    foods: undefined,
    cartCount: 0,
    status: {
        foods: 'idle'
    },
    error: {
        foods: null
    }
}

const foodSlice = createSlice({
    name: 'foods',
    initialState,
    reducers: {
        updateCartItemsCount: (state, action) => {

        }
    },
});

export default foodSlice.reducer