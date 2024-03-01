import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  id: null,
  title: '',
  description: '',
  listCollections: [],
};

const collectionSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setCollectionFromApi: (state, action) => {
      const data = action.payload;
      return {
        ...state,
        listCollections: data,
      };
    },
  },
});

export const { setCollectionFromApi } = collectionSlice.actions;

export default collectionSlice.reducer;
