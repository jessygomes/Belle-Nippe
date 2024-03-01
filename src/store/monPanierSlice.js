import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  user_id: null,
  cart: [],
};

const monPanierSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log('state', state);
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeFromCart } = monPanierSlice.actions;

export default monPanierSlice.reducer;
