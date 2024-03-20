/* eslint-disable camelcase */
import { createOrder, addOrderDetail, showOrder } from './orderSlice';

const orderMiddleware = (store) => (next) => (action) => {
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
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id,
        total,
        status: 'En attente',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const createAction = createOrder(data);
        store.dispatch(createAction);

        //! CRER UN ORDER_DETAIL POUR CHAQUE ITEM DU PANIER
        const orderDetailsPromises = cart.map((item) => {
          return fetch('http://localhost:3000/order_details', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              order_id: data.id,
              item_id: item.id,
              quantity: item.quantity,
              price: item.price,
            }),
          });
        });
        // Envoie les requêtes en parrallèle
        return Promise.all(orderDetailsPromises);
      })
      .then((responses) => {
        return Promise.all(responses.map((res) => res.json()));
      })
      .then((orderDetails) => {
        console.log(orderDetails);
        const addOrderDetailsAction = addOrderDetail(orderDetails);
        store.dispatch(addOrderDetailsAction);
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
