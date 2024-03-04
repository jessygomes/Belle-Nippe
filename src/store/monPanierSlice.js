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
      const item = action.payload;
      const exists = state.cart.find((cartItem) => cartItem.id === item.id);
      if (!exists) {
        // L'article n'est pas dans le panier, ajoutez-le
        state.cart.push(item);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemQuantity = state.cart.find((item) => item.id === id);
      if (itemQuantity) {
        itemQuantity.quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } =
  monPanierSlice.actions;

export default monPanierSlice.reducer;
