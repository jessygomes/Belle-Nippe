import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  id: null,
  name: '',
  listCategories: [],
};

const categorySlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setCategoryFromApi: (state, action) => {
      const data = action.payload;
      return {
        ...state,
        listCategories: data,
      };
    },
  },
});

export const { setCategoryFromApi } = categorySlice.actions;

export default categorySlice.reducer;
