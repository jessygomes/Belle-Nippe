import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  id: null,
  title: '',
  slug: '',
  images: ['', '', '', '', ''],
  price: null,
  stock: null,
  quantity: null,
  size: '',
  description: '',
  collection_id: null,
  category_ids: null,
  isActive: false,
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
    handleCreateItem: (state, action) => {
      const newItem = action.payload;
      return {
        ...state,
        listItems: [...state.listItems, newItem],
      };
    },
    handleUpdateItem: (state, action) => {
      const updatedItem = action.payload;
      return {
        ...state,
        listItems: state.listItems.map((item) =>
          item.id === updatedItem.id ? updatedItem : item
        ),
      };
    },
    deleteItem: (state, action) => {
      const itemId = action.payload;
      return {
        ...state,
        listItems: state.listItems.filter((item) => item.id !== itemId),
      };
    },
    decrementStock: (state, action) => {
      const updatedItems = action.payload;
      updatedItems.forEach((updatedItem) => {
        const itemStock = state.listItems.find(
          (item) => item.id === updatedItem.id
        );
        if (itemStock) {
          itemStock.stock = updatedItem.stock;
        }
      });
    },
  },
});

export const {
  setItemsFromApi,
  changeFieldValue,
  handleCreateItem,
  handleUpdateItem,
  deleteItem,
  decrementStock,
} = shopSlice.actions;

export default shopSlice.reducer;
