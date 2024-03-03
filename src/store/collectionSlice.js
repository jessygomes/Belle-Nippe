import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  id: null,
  titleCollection: '',
  descriptionCollection: '',
  isActive: false,
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
    changeFieldValue: (state, action) => {
      return {
        ...state,
        [action.payload.inputName]: action.payload.inputValue,
      };
    },
    handleCreateCollection: (state, action) => {
      const newCollection = action.payload;
      return {
        ...state,
        listCollections: [...state.listCollections, newCollection],
      };
    },
    handleUpdateCollection: (state, action) => {
      const updatedCollection = action.payload;
      return {
        ...state,
        listCollections: state.listCollections.map((collection) =>
          collection.id === updatedCollection.id
            ? updatedCollection
            : collection
        ),
      };
    },
    deleteCollection: (state, action) => {
      const collectionId = action.payload;
      return {
        ...state,
        listCollections: state.listCollections.filter(
          (collection) => collection.id !== collectionId
        ),
      };
    },
  },
});

export const {
  setCollectionFromApi,
  changeFieldValue,
  handleCreateCollection,
  handleUpdateCollection,
  deleteCollection,
} = collectionSlice.actions;

export default collectionSlice.reducer;
