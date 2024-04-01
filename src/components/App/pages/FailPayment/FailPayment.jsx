import { Link } from 'react-router-dom';
import './FailPayment.scss';

export default function FailPayment() {
  return (
    <div className="fail">
      <div className="fail__container">
        <p className="fail__text">Votre paiement a échoué...</p>
        <Link to="/monpanier">
          <button className="fail__btn" type="button">
            Retourner au panier
          </button>
        </Link>
      </div>
    </div>
  );
}
