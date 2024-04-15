/* eslint-disable camelcase */
import {
  createOrder,
  addOrderDetail,
  setOrders,
  setAllOrders,
} from './orderSlice';

const orderMiddleware = (store) => (next) => (action) => {
  const cookies = document.cookie.split('; ');
  const roleCookie = cookies.find((cookie) => cookie.startsWith('role='));
  const role = roleCookie ? roleCookie.split('=')[1] : null;

  const tokenCookie = cookies.find((cookie) => cookie.startsWith('token='));
  const token = tokenCookie ? tokenCookie.split('=')[1] : null;

  if (action.type === 'SAVE_CART') {
    const cartStorage = JSON.parse(localStorage.getItem('cart'));
    const cart = cartStorage.map((item) => ({
      id: item.id,
      title: item.title,
      size: item.size,
      quantity: item.quantity,
      price: item.price,
    }));
    const user_id = localStorage.getItem('id');
    const firstname_client = localStorage.getItem('prenom');
    const lastname_client = localStorage.getItem('nom');
    const email_client = localStorage.getItem('email');
    console.log(firstname_client, lastname_client, email_client, user_id, cart);
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        user_id,
        firstname_client,
        lastname_client,
        email_client,
        total,
        status: 'En attente',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const createAction = createOrder(data);
        console.log(data);
        store.dispatch(createAction);

        //! CRER UN ORDER_DETAIL POUR CHAQUE ITEM DU PANIER
        const orderDetailsPromises = cart.map((item) => {
          console.log(item.title, item.id, item.quantity, item.price);
          return fetch('http://localhost:3000/order_details', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              order_id: data.id,
              item_id: item.id,
              item_name: item.title,
              quantity: item.quantity,
              price: item.price,
            }),
          }).catch((error) => console.error('Error:', error));
        });
        // Envoie les requêtes en parrallèle
        return Promise.all(orderDetailsPromises);
      })
      .then((responses) => {
        return Promise.all(responses.map((res) => res.json()));
      })
      .then((orderDetails) => {
        const addOrderDetailsAction = addOrderDetail(orderDetails);
        store.dispatch(addOrderDetailsAction);
      });
  }

  if (action.type === 'GET_ORDERS') {
    const user_id = localStorage.getItem('id');
    fetch(`http://localhost:3000/users/${user_id}/orders`)
      .then((res) => res.json())
      .then((data) => {
        const createAction = setOrders(data);
        store.dispatch(createAction);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  if (action.type === 'GET_ALL_ORDERS') {
    fetch('http://localhost:3000/ordersAndDetails')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const createAction = setAllOrders(data);
        store.dispatch(createAction);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  if (action.type === 'UPDATE_ORDER_STATUS') {
    const { orderId, newStatus } = action.payload;
    fetch(`http://localhost:3000/orders/${orderId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Role: role,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        status: newStatus,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  // if (action.type === 'GET_ORDER_FROM_API') {
  //   const orderID = action.payload;
  //   fetch(`http://localhost:3000/orders/${orderID}/order_details`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       const createAction = showOrder(data);
  //       store.dispatch(createAction);
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  // }
  return next(action);
};

export default orderMiddleware;
