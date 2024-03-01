import { setItemsFromApi } from './shopSlice';

const shopMiddleware = (store) => (next) => (action) => {
  if (action.type === 'GET_ITEMS_FROM_API') {
    fetch('http://localhost:4000/items')
      .then((response) => response.json())
      .then((data) => {
        store.dispatch(setItemsFromApi(data));
      })
      .catch((error) => {
        console.error(error, 'Erreur lors de la récupération des données API');
      });
  }
  return next(action);
};

export default shopMiddleware;
