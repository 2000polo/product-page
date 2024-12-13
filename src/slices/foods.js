import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    foods: [],
    cartCount: 0,
    foodCategories: [],
    currentCategory: undefined,
    selectedCategoryFood: [],
    cart: {},
    status: {
        foods: 'idle'
    },
    error: {
        foods: null
    }
}

export const fetchFoods = createAsyncThunk('foods/fetchFoods', async () => {
    try {
        const response = await axios.get('https://run.mocky.io/v3/180b4edd-7baa-4e3b-aac2-4746df1ac904');
        return response.data
    } catch (error) {
        throw error;
    }
});

const foodSlice = createSlice({
    name: 'foods',
    initialState,
    reducers: {
        updateCartItemsCount: (state, action) => {
            state.cartCount = Object.keys(state.cart).reduce((sum, value) => sum + state.cart[value], 0);
        },

        addToCart: (state, action) => {
            const { id } = action.payload;
            console.log(id)
            if (state.cart[id]) {
                state.cart[id] += 1;
            } else {
                state.cart[id] = 1;
            }
        },

        removeItem: (state, action) => {
            const { id } = action.payload;
            if (state.cart[id]) {
                state.cart[id] -= 1;
            }
        },

        updateCurrentFoodCategory: (state, { payload }) => {
            const { category_id } = payload;
            state.currentCategory = category_id;
            state.selectedCategoryFood = state.foods.filter((category) => category.menu_category_id === state.currentCategory)[0]?.category_dishes
            // console.log(action)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFoods.pending, (state) => {
                state.status.foods = 'loading';
            })
            .addCase(fetchFoods.fulfilled, (state, action) => {
                state.status.foods = 'succeeded';
                state.foods = action.payload?.data?.[0]?.table_menu_list;
                state.foodCategories = state.foods.map((category) => {
                    return {
                        label: category?.menu_category,
                        value: category?.menu_category_id,
                    }
                })
                state.currentCategory = state.foodCategories[0].value,
                    state.selectedCategoryFood = state.foods.filter((category) => category.menu_category_id === state.currentCategory)[0]?.category_dishes
            })
            .addCase(fetchFoods.rejected, (state, action) => {
                state.status.foods = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { updateCurrentFoodCategory, addToCart, removeItem, updateCartItemsCount } = foodSlice.actions

export default foodSlice.reducer