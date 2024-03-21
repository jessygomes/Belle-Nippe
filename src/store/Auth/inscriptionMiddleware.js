import { handleSignupError, handleSuccessSignup } from './inscriptionSlice';
import { ConnexionAfterSignUp, setToken } from './connexionSlice';

const inscriptionMiddleware = (store) => (next) => (action) => {
  if (action.type === 'SIGNUP') {
    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nom: store.getState().inscription.nom,
        prenom: store.getState().inscription.prenom,
        email: store.getState().inscription.email,
        password: store.getState().inscription.password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            const errorAction = handleSignupError(data);
            store.dispatch(errorAction);
          });
        }
        return response.json();
      })
      .then((data) => {
        const createAction = handleSuccessSignup(data);
        store.dispatch(createAction);

        const actionConnexion = ConnexionAfterSignUp(data.user);
        store.dispatch(actionConnexion);

        const actionToken = setToken(data.token);
        store.dispatch(actionToken);
      })
      .catch((error) => {
        console.error(error, 'Erreur lors de la création de la collection');
        const errorAction = handleSignupError(error);
        store.dispatch(errorAction);
      });
  }

  return next(action);
};

export default inscriptionMiddleware;
