import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ProduitForPanier from '../../ProduitForPanier/ProduitForPanier';
import './MonPanier.scss';

export default function MonPanier() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const cart = useSelector((state) => state.monPanier.cart);
  const cartStorage = JSON.parse(localStorage.getItem('cart')) || [];
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  console.log('cart', cart);

  const cookies = document.cookie.split('; ');
  const isLoggedCookie = cookies.find((cookie) =>
    cookie.startsWith('is_logged=')
  );
  const isLogged = isLoggedCookie
    ? isLoggedCookie.split('=')[1] === 'true'
    : false;
  console.log('isLogged', isLogged);

  const [message, setMessage] = useState('');

  //! EST-CE QUE LE USER EST CONNECTE ?
  const handlePayment = async () => {
    if (!isLogged) {
      setMessage(
        <span>
          Vous devez être connecté pour effectuer un paiement.
          <br />
          <Link className="linkRegister" to="/connexion">
            Connectez-vous
          </Link>{' '}
          ou{' '}
          <Link className="linkRegister" to="/inscription">
            Créez un compte
          </Link>
          .
        </span>
      );
      return;
    }
    if (cartStorage.length === 0) {
      setMessage('Votre panier est vide.');
      return;
    }
    //! ENREGISTRER LE PANIER DANS LA ORDER + REDIRECTION
    const action = { type: 'SAVE_CART' };
    dispatch(action);
    nav('/order');
  };

  return (
    <div>
      <div className="panier">
        <h2 className="titlePage">Mon Panier</h2>
      </div>
      <div className="panier__list">
        {cartStorage.map((item) => (
          <ProduitForPanier key={item.id} item={item} />
        ))}
      </div>
      <div className="panier__price">
        <p>Total :</p>
        <p>{total} €</p>
      </div>
      <div className="lienVersCollection" id="paiement-btn">
        <div className="lienVersCollection__links">
          <button
            className="accueil__btn"
            type="button"
            onClick={handlePayment}
          >
            Paiement
          </button>
        </div>
        <div>
          {/* ... */}
          {message && <p className="ConnexOrRegister">{message}</p>}
          {/* ... */}
        </div>
      </div>
    </div>
  );
}
