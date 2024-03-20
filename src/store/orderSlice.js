import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  id: '',
  user_id: '',
  total: 0.0,
  status: 'En attente',
  order_detail: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    createOrder: (state, action) => {
      const data = action.payload;
      return {
        ...state,
        id: data.id,
        user_id: data.user_id,
        total: data.total,
        status: data.status,
      };
    },
    addOrderDetail: (state, action) => {
      const data = action.payload;
      return {
        ...state,
        order_detail: data,
      };
    },
    showOrder: (state, action) => {
      const data = action.payload;
      return {
        ...state,
        order_detail: data.order_detail,
      };
    },
  },
});

export const { createOrder, addOrderDetail, showOrder } = orderSlice.actions;

export default orderSlice.reducer;
