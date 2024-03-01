import { setCollectionFromApi } from './collectionSlice';

const collectionMiddleware = (store) => (next) => (action) => {
  if (action.type === 'GET_COLLECTIONS_FROM_API') {
    fetch('http://localhost:4000/collections')
      .then((response) => response.json())
      .then((data) => {
        store.dispatch(setCollectionFromApi(data));
      })
      .catch((error) => {
        console.error(error, 'Erreur lors de la récupération des données API');
      });
  }
  return next(action);
};

export default collectionMiddleware;
