import { configureStore } from '@reduxjs/toolkit';
import shopSlice from './shopSlice';
import shopMiddleware from './shopMiddleware';
import collectionSlice from './collectionSlice';
import collectionMiddleware from './collectionMiddleware';
import categorySlice from './categorySlice';
import categoryMiddleware from './categoryMiddleware';
import monPanierSlice from './monPanierSlice';
import inscriptionSlice from './Auth/inscriptionSlice';
import inscriptionMiddleware from './Auth/inscriptionMiddleware';
import connexionSlice from './Auth/connexionSlice';
import connexionMiddleware from './Auth/connexionMiddleware';
import monPanierItemSlice from './monPanierItemSlice';

export default configureStore({
  reducer: {
    shop: shopSlice,
    collection: collectionSlice,
    category: categorySlice,
    monPanier: monPanierSlice,
    monPanierItem: monPanierItemSlice,
    inscription: inscriptionSlice,
    connexion: connexionSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      shopMiddleware,
      collectionMiddleware,
      categoryMiddleware,
      inscriptionMiddleware,
      connexionMiddleware
    ),
});
