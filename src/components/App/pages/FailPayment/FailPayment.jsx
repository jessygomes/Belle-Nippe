import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import './FailPayment.scss';

export default function FailPayment() {
  return (
    <div className="fail">
      <Navbar />
      <div className="fail__container">
        <p className="fail__text">Votre paiement a échoué...</p>
        <Link to="/monpanier">
          <button className="fail__btn" type="button">
            Retourner au panier
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
