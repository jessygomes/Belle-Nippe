import { NavLink } from 'react-router-dom';
import './OrdersAdmin.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFieldValue } from '../../../../store/orderSlice';

export default function OrdersAdmin() {
  const dispatch = useDispatch();

  const [selectedOrderID, setSelectedOrderId] = useState('');
  // const [selectedStatus, setSelectedStatus] = useState('');
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
  console.log(ordersList);

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

  //! Trier les commandes en fonction du mois et de l'année
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const filteredOrdersList = ordersList.filter((order) => {
    const orderDate = new Date(order.created_at);
    const orderMonth = orderDate.getMonth() + 1;
    const orderYear = orderDate.getFullYear();

    if (selectedMonth !== '' && orderMonth !== Number(selectedMonth)) {
      return false;
    }

    if (selectedYear !== '' && orderYear !== Number(selectedYear)) {
      return false;
    }

    return true;
  });

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
        <div className="admin__actions">
          <h2 className="admin__title">Commandes</h2>
          <select
            className="categorie__select"
            name=""
            onChange={handleMonthChange}
          >
            <option value="">Trier par mois</option>
            <option value="01">Janvier</option>
            <option value="02">Février</option>
            <option value="03">Mars</option>
            <option value="04">Avril</option>
            <option value="05">Mai</option>
            <option value="06">Juin</option>
            <option value="07">Juillet</option>
            <option value="08">Août</option>
            <option value="09">Septembre</option>
            <option value="10">Octobre</option>
            <option value="11">Novembre</option>
            <option value="12">Décembre</option>
          </select>
          <select
            className="categorie__select"
            name=""
            onChange={handleYearChange}
          >
            <option value="">Trier par année</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
            <option value="2031">2031</option>
            <option value="2032">2032</option>
          </select>
        </div>
        <div className="admin__ordersList">
          {filteredOrdersList.map((order) => (
            <div className="profil__commande" key={order.id}>
              <p className="profil__commandeText">
                Commande du{' '}
                {new Date(order.created_at).toLocaleDateString('fr-FR', {
                  day: '2-digit',
                  month: '2-digit',
                  year: 'numeric',
                })}
              </p>
              <p>Numéro de commande : {order.id}</p>
              <p>Prénom : {order.firstname_client}</p>
              <p>Nom : {order.lastname_client}</p>
              <p>Email : {order.email_client}</p>
              <p>Adresse : {order.adress_client}</p>
              <p>Montant : {order.total} €</p>
              <p>Statut : {order.status}</p>
              <ul>
                <li>Articles :</li>
                {order.order_details.map((orderDetail) => (
                  <li key={orderDetail.id}>- {orderDetail.item_name}</li>
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
            <button
              className="modal__close"
              onClick={closeModalUpdate}
              onKeyDown={closeModalUpdate}
              aria-label="Close"
              type="button"
            >
              <i className="fa fa-close" />
            </button>
            <h2 className="modal__title">Modifier le statut de la commande</h2>

            <form className="modal__form" onSubmit={handleSubmitUpdate}>
              <label htmlFor="status">Statut</label>
              <select
                id="status"
                name="status"
                value={status}
                onChange={changeField}
              >
                <option value="En attente">En attente</option>
                <option value="Annulée">Annulée</option>
                <option value="Préparation">Préparation</option>
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
    </div>
  );
}
