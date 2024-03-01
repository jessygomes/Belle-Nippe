import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import ProduitForPanier from '../../ProduitForPanier/ProduitForPanier';
import './MonPanier.scss';

export default function MonPanier() {
  const cart = useSelector((state) => state.monPanier.cart);
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  console.log('cart', cart);

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
        {/* <Trash size="100%" color="#072A3D"/> */}
      </div>
      {/* <div className='lienVersPaiement'>
                <a className='lienVersCollection__links' href="/paiement">
                <button className='accueil__btn'>Paiement</button>
                </a>
            </div> */}
      <div className="lienVersCollection" id="paiement-btn">
        <Link className="lienVersCollection__links" to="/shop">
          <button className="accueil__btn" type="button">
            Paiement
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
