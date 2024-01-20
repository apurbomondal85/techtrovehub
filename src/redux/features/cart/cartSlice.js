import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cart: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state) => {
            state.cart += 1
        }
    },
})

export const { addCart } = cartSlice.actions

export default cartSlice.reducer