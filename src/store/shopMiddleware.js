import { setItemsFromApi } from "./shopSlice";

const shopMiddleware = (store) => (next) => (action) => {
    if(action.type === 'GET_ITEMS_FROM_API') {
        console.log('Déclancher le call API');
        fetch('http://127.0.0.1:8000/apiB')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            store.dispatch(setItemsFromApi(data));
        })
        .catch((error) => {
            console.error('Erreur lors de la récupération des données API')
        })
    }
    return next(action)
}

export default shopMiddleware;