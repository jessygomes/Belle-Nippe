import {
  setItemsFromApi,
  handleCreateItem,
  handleUpdateItem,
  deleteItem,
  decrementStock,
} from './shopSlice';

const shopMiddleware = (store) => (next) => (action) => {
  const cookies = document.cookie.split('; ');
  const roleCookie = cookies.find((cookie) => cookie.startsWith('role='));
  const role = roleCookie ? roleCookie.split('=')[1] : null;

  const tokenCookie = cookies.find((cookie) => cookie.startsWith('token='));
  const token = tokenCookie ? tokenCookie.split('=')[1] : null;

  if (action.type === 'GET_ITEMS_FROM_API') {
    fetch('http://localhost:3000/items')
      .then((response) => response.json())
      .then((data) => {
        store.dispatch(setItemsFromApi(data));
      })
      .catch((error) => {
        console.error(error, 'Erreur lors de la récupération des données API');
      });
  }

  if (action.type === 'GET_ITEMS_FROM_COLLECTION') {
    const { collectionId } = action.payload;
    fetch(`http://localhost:3000/collections/${collectionId}/items`)
      .then((response) => response.json())
      .then((data) => {
        store.dispatch(setItemsFromApi(data));
      })
      .catch((error) => {
        console.error(error, 'Erreur lors de la récupération des données API');
      });
  }

  if (action.type === 'CREATE_ITEM') {
    const formData = new FormData();

    formData.append('title', store.getState().shop.title);
    formData.append('slug', store.getState().shop.slug);
    formData.append('description', store.getState().shop.description);
    formData.append('price', parseInt(store.getState().shop.price, 10));
    formData.append('size', store.getState().shop.size);
    formData.append('stock', parseInt(store.getState().shop.stock, 10));
    formData.append('quantity', 1);
    formData.append('is_active', store.getState().shop.is_active);
    formData.append(
      'collection_id',
      parseInt(store.getState().shop.collection_id, 10)
    );
    formData.append(
      'category_id',
      parseInt(store.getState().shop.category_id, 10)
    );
    if (action.payload) {
      action.payload.forEach((file) => {
        formData.append('images', file);
      });
    }
    console.log('images', action.payload);

    fetch('http://localhost:3000/items', {
      method: 'POST',
      headers: {
        Role: role,
        Authorization: `Bearer ${token}`,
      },
      body: formData,
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
    fetch(`http://localhost:3000/items/${itemId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Role: role,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: store.getState().shop.title,
        slug: store.getState().shop.slug,
        description: store.getState().shop.description,
        price: parseInt(store.getState().shop.price, 10),
        size: store.getState().shop.size,
        stock: parseInt(store.getState().shop.stock, 10),
        quantity: 1,
        is_active: store.getState().shop.is_active,
        collection_id: parseInt(store.getState().shop.collection_id, 10),
        category_id: parseInt(store.getState().shop.category_id, 10),
        images: store.getState().shop.images,
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
    fetch(`http://localhost:3000/items/${itemId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Role: role,
        Authorization: `Bearer ${token}`,
      },
    }).then(() => {
      const deleteAction = deleteItem(itemId);
      store.dispatch(deleteAction);
    });
  }

  if (action.type === 'DECREMENT_STOCK') {
    const cart = action.payload;
    console.log(cart, 'cart');
    cart.forEach((cartItem) => {
      fetch(`http://localhost:3000/items/${cartItem.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          stock: cartItem.stock - cartItem.quantity,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          const updateAction = decrementStock(data);
          store.dispatch(updateAction);
        });
    });
  }
  return next(action);
};

export default shopMiddleware;
