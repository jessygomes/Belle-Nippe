import { NavLink } from 'react-router-dom';
import './OrdersAdmin.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../../Footer/Footer';
import { changeFieldValue } from '../../../../store/orderSlice';

export default function OrdersAdmin() {
  const dispatch = useDispatch();

  const [selectedOrderID, setSelectedOrderId] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const { status } = useSelector((state) => state.order);

  //! MODALS
  const [showModalUpdate, setShowModalUpdate] = useState(false);
  const openModalUpdate = (orderId) => {
    setSelectedOrderId(orderId);
    setShowModalUpdate(true);
  };
  const closeModalUpdate = () => {
    setShowModalUpdate(false);
  };

  //! CHARGER LES ORDERS DU USER
  useEffect(() => {
    const action = { type: 'GET_ALL_ORDERS' };
    dispatch(action);
  }, [dispatch]);

  const ordersList = useSelector((state) => state.order.orders);

  //! MODIFIER LE STATUT DE LA COMMANDE
  function changeField(evt) {
    const { name, value } = evt.target;
    const action = changeFieldValue({ inputName: name, inputValue: value });
    console.log(`Name: ${name}, Value: ${value}`);
    dispatch(action);
  }

  function handleUpdateStatus() {
    const action = {
      type: 'UPDATE_ORDER_STATUS',
      payload: { orderId: selectedOrderID, newStatus: status },
    };
    console.log(action);
    dispatch(action);
  }
  function handleSubmitUpdate(evt) {
    evt.preventDefault();
    handleUpdateStatus();
    closeModalUpdate();
  }

  return (
    <div className="admin">
      <div className="admin__navbar">
        <NavLink className="accueil__logo" to="/">
          <img
            src="/Logo/1dfd1fef-d2c2-49ee-9616-be4b313175c0.png"
            alt="Logo belle Nippe"
          />
        </NavLink>
        <div className="admin__navbarcontainer">
          <nav className="admin__navbarLinks">
            <NavLink className="admin__link" to="/shop">
              Shop
            </NavLink>
            <NavLink className="admin__link" to="/editorial">
              Editorial
            </NavLink>
            <NavLink className="admin__link" to="/admin/orders">
              Commandes
            </NavLink>
          </nav>
        </div>
      </div>

      <div className="admin__inventaire">
        <h2 className="admin__title">Commandes</h2>
        <div className="admin__ordersList">
          {ordersList.map((order) => (
            <div className="profil__commande" key={order.id}>
              <p>Commande du {order.created_at}</p>
              <p>Numéro de commande : {order.id}</p>
              <p>Montant : {order.total} €</p>
              <p>Statut : {order.status}</p>
              <ul>
                <li>Articles :</li>
                {order.order_details.map((orderDetail) => (
                  <li key={orderDetail.id}>{orderDetail.item_id}</li>
                ))}
              </ul>
              <button
                className="collectionAdmin__btn"
                type="button"
                onClick={() => openModalUpdate(order.id)}
              >
                Modifier
              </button>
            </div>
          ))}
        </div>
      </div>

      {showModalUpdate && (
        <div className="modal">
          <div className="modal__container">
            <i
              className="fa fa-close"
              onClick={closeModalUpdate}
              onKeyDown={closeModalUpdate}
            />
            <h2 className="modal__title">Modifier le statut de la commande</h2>

            <form className="modal__form" onSubmit={handleSubmitUpdate}>
              <label htmlFor="status">Statut</label>
              <select name="status" value={status} onChange={changeField}>
                <option value="En attente">En attente</option>
                <option value="Annulée">Annulée</option>
                <option value="En cours de préparation">
                  En cours de préparation
                </option>
                <option value="Expédiée">Expédiée</option>
                <option value="Livrée">Livrée</option>
              </select>
              <button className="modal__btn" type="submit">
                Modifier
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
