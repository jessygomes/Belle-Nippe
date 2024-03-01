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
  active: false,
  listItems: [],
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setItemsFromApi: (state, action) => {
      const data = action.payload;
      return {
        ...state,
        listItems: data,
      };
    },
    changeFieldValue: (state, action) => {
      return {
        ...state,
        [action.payload.inputName]: action.payload.inputValue,
      };
    },
  },
});

export const { setItemsFromApi, changeFieldValue } = shopSlice.actions;

export default shopSlice.reducer;
