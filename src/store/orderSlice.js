import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  id: '',
  user_id: '',
  total: 0.0,
  status: '',
  order_detail: [],
  orders: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    changeFieldValue: (state, action) => {
      return {
        ...state,
        [action.payload.inputName]: action.payload.inputValue,
      };
    },
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
    setOrders: (state, action) => {
      const data = action.payload;
      return {
        ...state,
        orders: data,
      };
    },
    setAllOrders: (state, action) => {
      const data = action.payload;
      return {
        ...state,
        orders: data,
      };
    },
  },
});

export const {
  createOrder,
  addOrderDetail,
  showOrder,
  setOrders,
  setAllOrders,
  changeFieldValue,
} = orderSlice.actions;

export default orderSlice.reducer;
