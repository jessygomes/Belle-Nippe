import {
  handleSuccessLogin,
  handleUpdateUser,
  deleteUser,
} from './connexionSlice';

const connexionMiddleware = (store) => (next) => (action) => {
  if (action.type === 'LOGIN') {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: store.getState().connexion.email,
        password: store.getState().connexion.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        const createAction = handleSuccessLogin(data);
        store.dispatch(createAction);
      })
      .catch((error) => {
        console.error(error, 'Erreur lors de la connexion');
      });
  }

  if (action.type === 'UPDATE_USER') {
    const userId = localStorage.getItem('id');
    fetch(`http://localhost:3000/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nom: store.getState().connexion.nom,
        prenom: store.getState().connexion.prenom,
        email: store.getState().connexion.email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        const createAction = handleUpdateUser(data);
        store.dispatch(createAction);
      })
      .catch((error) => {
        console.error(error, 'Erreur lors de la mise à jour du compte');
      });
  }

  if (action.type === 'DELETE_USER') {
    const userId = localStorage.getItem('id');
    fetch(`http://localhost:3000/users/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      const deleteAction = deleteUser(userId);
      store.dispatch(deleteAction);
    });
  }

  return next(action);
};

export default connexionMiddleware;
