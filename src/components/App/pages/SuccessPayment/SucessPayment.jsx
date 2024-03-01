import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import './SuccessPayment.scss';

export default function SuccessPayment() {
  return (
    <div className="success">
      <Navbar />
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
      <Footer />
    </div>
  );
}
