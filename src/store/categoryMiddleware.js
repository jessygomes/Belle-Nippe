import { setCategoryFromApi } from './categorySlice';

const categoryMiddleware = (store) => (next) => (action) => {
  if (action.type === 'GET_CATEGORY_FROM_API') {
    console.log('Déclancher le call API');
    fetch('http://localhost:4000/categories')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        store.dispatch(setCategoryFromApi(data));
      })
      .catch((error) => {
        console.error(error, 'Erreur lors de la récupération des données API');
      });
  }
  return next(action);
};

export default categoryMiddleware;