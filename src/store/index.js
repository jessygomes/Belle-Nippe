import { configureStore } from '@reduxjs/toolkit';
import shopSlice from './shopSlice';
import shopMiddleware from './shopMiddleware';
import collectionSlice from './collectionSlice';
import collectionMiddleware from './collectionMiddleware';
import categorySlice from './categorySlice';
import categoryMiddleware from './categoryMiddleware';
import monPanierSlice from './monPanierSlice';

export default configureStore({
  reducer: {
    shop: shopSlice,
    collection: collectionSlice,
    category: categorySlice,
    monPanier: monPanierSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      shopMiddleware,
      collectionMiddleware,
      categoryMiddleware
    ),
});
