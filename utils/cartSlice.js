import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: []
    },
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        removeProduct: (state, action) => {
            let filteredCartItems = [];
            state.products.forEach((product) => {
                if (product.product_id !== action.payload.product_id) {
                    filteredCartItems.push(product);
                }
            });
            state.products = filteredCartItems;
        },
        clearCart: (state) => {
            state.products.length = 0;
        }
    }
})

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;