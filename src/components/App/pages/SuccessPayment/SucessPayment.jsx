import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../../../store/monPanierSlice';
import './SuccessPayment.scss';

export default function SuccessPayment() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  //! GERER LE STOCK APRES LE PAIEMENT
  useEffect(() => {
    const action = { type: 'DECREMENT_STOCK', payload: cart };
    dispatch(action);
    localStorage.removeItem('cart');
    dispatch(clearCart());
  }, [cart, dispatch]);

  return (
    <div className="success">
      <Helmet>
        <title>Paiement Réussi | Belle Nippe</title>
        <meta
          name=" Page Confirmation du paiement | Belle Nippe"
          content="Confirmation de paiement de votre commande sur le site Belle Nippe"
        />
      </Helmet>
      <div className="success__container">
        <p className="success__text">
          Votre paiement a bien été pris en compte ! Merci pour votre achat.
        </p>
        <Link to="/">
          <button className="success__btn" type="button">
            Retourner à l'accueil
          </button>
        </Link>
      </div>
    </div>
  );
}
