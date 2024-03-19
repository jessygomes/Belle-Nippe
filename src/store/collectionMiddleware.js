import {
  setCollectionFromApi,
  handleCreateCollection,
  deleteCollection,
  handleUpdateCollection,
} from './collectionSlice';

const collectionMiddleware = (store) => (next) => (action) => {
  if (action.type === 'GET_COLLECTIONS_FROM_API') {
    fetch('http://localhost:3000/collections')
      .then((response) => response.json())
      .then((data) => {
        store.dispatch(setCollectionFromApi(data));
      })
      .catch((error) => {
        console.error(error, 'Erreur lors de la récupération des données API');
      });
  }

  if (action.type === 'CREATE_COLLECTION') {
    fetch('http://localhost:3000/collections', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title_collection: store.getState().collection.title_collection,
        description_collection:
          store.getState().collection.description_collection,
        is_active: store.getState().collection.is_active,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        const createAction = handleCreateCollection(data);
        store.dispatch(createAction); // Dispatch de l'action pour mettre à jour le state
      })
      .catch((error) => {
        console.error(error, 'Erreur lors de la création de la collection');
      });
  }

  if (action.type === 'UPDATE_COLLECTION') {
    const collectionId = action.payload;
    fetch(`http://localhost:3000/collections/${collectionId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title_collection: store.getState().collection.title_collection,
        description_collection:
          store.getState().collection.description_collection,
        is_active: store.getState().collection.is_active,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const updateAction = handleUpdateCollection(data);
        store.dispatch(updateAction);
      });
  }

  if (action.type === 'DELETE_COLLECTION') {
    const collectionId = action.payload;
    fetch(`http://localhost:3000/collections/${collectionId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      const deleteAction = deleteCollection(collectionId);
      store.dispatch(deleteAction);
    });
  }

  return next(action);
};

export default collectionMiddleware;
