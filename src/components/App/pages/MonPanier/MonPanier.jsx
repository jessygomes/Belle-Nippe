import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import ProduitForPanier from '../../ProduitForPanier/ProduitForPanier';
import './MonPanier.scss';

export default function MonPanier() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.monPanier.cart);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  console.log('cart', cart);

  //! GERER LE STOCK APRES LE PAIEMENT
  const handlePayment = async () => {
    const action = { type: 'DECREMENT_STOCK', payload: cart };
    dispatch(action);
  };

  return (
    <div>
      <Navbar />
      <div className="panier">
        <h2 className="titlePage">Mon Panier</h2>
      </div>
      <div className="panier__list">
        {cart.map((item) => (
          <ProduitForPanier key={item.id} item={item} />
        ))}
      </div>
      <div className="panier__price">
        <p>Total :</p>
        <p>{total} €</p>
      </div>
      <div className="lienVersCollection" id="paiement-btn">
        <Link className="lienVersCollection__links" to="/success">
          <button
            className="accueil__btn"
            type="button"
            onClick={handlePayment}
          >
            Paiement
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
