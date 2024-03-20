import { setCategoryFromApi } from './categorySlice';

const categoryMiddleware = (store) => (next) => (action) => {
  if (action.type === 'GET_CATEGORY_FROM_API') {
    fetch('http://localhost:3000/categories')
      .then((response) => response.json())
      .then((data) => {
        store.dispatch(setCategoryFromApi(data));
      })
      .catch((error) => {
        console.error(error, 'Erreur lors de la récupération des données API');
      });
  }
  return next(action);
};

export default categoryMiddleware;
