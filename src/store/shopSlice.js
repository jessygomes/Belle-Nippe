import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  id: null,
  title: '',
  slug: '',
  images: ['', '', '', '', ''],
  price: null,
  stock: null,
  size: '',
  description: '',
  collection_id: null,
  category_ids: null,
  listItems: [],
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setItemsFromApi: (state, action) => {
      const data = action.payload;
      console.log('data', data);
      return {
        ...state,
        listItems: data,
      };
    },
  },
});

export const { setItemsFromApi } = shopSlice.actions;

export default shopSlice.reducer;
