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
    changeFieldValue: (state, action) => {
      return {
        ...state,
        [action.payload.inputName]: action.payload.inputValue,
      };
    },
  },
});

export const { setCategoryFromApi, changeFieldValue } = categorySlice.actions;

export default categorySlice.reducer;
