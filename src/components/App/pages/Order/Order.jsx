import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import './Order.scss';

export default function Order() {
  const orderDetails = useSelector((state) => state.order.order_detail);
  console.log('order', orderDetails);

  return (
    <div className="orderRecap">
      <Navbar />
      <div className="orderRecap__container">
        <p className="orderRecap__text">Récapitulatif de votre commande :</p>
        <Link to="/">
          <div className="orderRecap__list">
            {orderDetails &&
              orderDetails.map((order) => (
                <div className="orderRecap__list__item" key={order.id}>
                  <p>Produit : {order.item_name} </p>
                  <p>Prix : {order.price}</p>
                  <p>Quantité : {order.quantity}</p>
                </div>
              ))}
          </div>
          <button className="orderRecap__btn" type="button">
            Continuer
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
