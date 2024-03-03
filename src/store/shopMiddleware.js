import {
  setItemsFromApi,
  handleCreateItem,
  handleUpdateItem,
  deleteItem,
} from './shopSlice';

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

  if (action.type === 'CREATE_ITEM') {
    fetch('http://localhost:4000/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: store.getState().shop.title,
        slug: store.getState().shop.slug,
        images: store.getState().shop.images,
        price: parseInt(store.getState().shop.price, 10),
        stock: parseInt(store.getState().shop.stock, 10),
        size: store.getState().shop.size,
        description: store.getState().shop.description,
        collection_id: parseInt(store.getState().shop.collection_id, 10),
        category_ids: parseInt(store.getState().shop.category_ids, 10),
        isActive: store.getState().shop.isActive,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        const createAction = handleCreateItem(data);
        store.dispatch(createAction); // Dispatch de l'action pour mettre à jour le state
      })
      .catch((error) => {
        console.error(error, 'Erreur lors de la création de la collection');
      });
  }

  if (action.type === 'UPDATE_ITEM') {
    const itemId = action.payload;
    fetch(`http://localhost:4000/items/${itemId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: store.getState().shop.title,
        slug: store.getState().shop.slug,
        images: store.getState().shop.images,
        price: parseInt(store.getState().shop.price, 10),
        stock: parseInt(store.getState().shop.stock, 10),
        size: store.getState().shop.size,
        description: store.getState().shop.description,
        collection_id: parseInt(store.getState().shop.collection_id, 10),
        category_ids: parseInt(store.getState().shop.category_ids, 10),
        isActive: store.getState().shop.isActive,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const updateAction = handleUpdateItem(data);
        store.dispatch(updateAction);
      });
  }

  if (action.type === 'DELETE_ITEM') {
    const itemId = action.payload;
    fetch(`http://localhost:4000/items/${itemId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      const deleteAction = deleteItem(itemId);
      store.dispatch(deleteAction);
    });
  }
  return next(action);
};

export default shopMiddleware;
