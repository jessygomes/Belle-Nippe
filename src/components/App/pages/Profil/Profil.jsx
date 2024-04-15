import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Profil.scss';
import {
  changeFieldValue,
  handleLogout,
} from '../../../../store/Auth/connexionSlice';

export default function Profil() {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const { nom, prenom } = useSelector((state) => state.connexion);

  //! CHARGER LES ORDERS DU USER
  useEffect(() => {
    const action = { type: 'GET_ORDERS' };
    dispatch(action);
  }, [dispatch]);

  const ordersList = useSelector((state) => state.order.orders);

  //! Gestion des modals
  const [showModalModif, setShowModalModif] = useState(false);
  const [showModalSupp, setShowModalSupp] = useState(false);

  const openModal = () => {
    setShowModalModif(true);
  };
  const closeModal = () => {
    setShowModalModif(false);
  };
  const openModalSupp = () => {
    setShowModalSupp(true);
  };
  const closeModalSupp = () => {
    setShowModalSupp(false);
  };

  //! UPDATE USER
  function changeField(evt) {
    const { name, value } = evt.target;
    const action = changeFieldValue({ inputName: name, inputValue: value });
    console.log(`Name: ${name}, Value: ${value}`);
    dispatch(action);
  }

  function handleUpdateUser() {
    const action = { type: 'UPDATE_USER' };
    dispatch(action);
  }

  const handleSubmitModif = (evt) => {
    evt.preventDefault();
    closeModal();
    handleUpdateUser();
    localStorage.setItem('nom', nom);
    localStorage.setItem('prenom', prenom);
  };

  //! DELETE USER
  function handleDeleteUser() {
    const action = { type: 'DELETE_USER' };
    dispatch(action);
    localStorage.clear();
    document.cookie = 'id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie =
      'is_logged=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'nom=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'prenom=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    dispatch(handleLogout());
    nav('/');
  }

  //! LOGOUT
  function handleLogoutClick() {
    localStorage.clear();
    document.cookie = 'id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie =
      'is_logged=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'nom=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'prenom=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'role=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    dispatch(handleLogout());
    nav('/');
  }

  console.log('ordersList', ordersList);

  return (
    <div>
      <Helmet>
        <title>Mon Profil | Belle Nippe</title>
        <meta
          name=" Page Profil | Belle Nippe"
          content="La page client du site Belle Nippe"
        />
      </Helmet>
      <div className="profil">
        <h1 className="titlePage">Mon Compte</h1>
        <div className="profil__container">
          <h2 className="profil__title2">Mes commandes</h2>
          <div className="profil__orderClient">
            {ordersList.length > 0 ? (
              ordersList.map((order) => (
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
                  <p>Montant : {order.total} €</p>
                  <p>Statut : {order.status}</p>
                  <ul>
                    <li>Articles :</li>
                    {order.order_details.map((orderDetail) => (
                      <li key={orderDetail.id}>- {orderDetail.item_name}</li>
                    ))}
                  </ul>
                </div>
              ))
            ) : (
              <p>Aucune commande pour le moment</p>
            )}
          </div>

          <h2>Informations personnelles</h2>
          <div className="profil__infoClient">
            <div className="profil__contentInfoClient">
              <h3>Nom</h3>
              <p className="profil__anInfo">{localStorage.getItem('nom')}</p>
            </div>

            <div className="profil__contentInfoClient">
              <h3>Prénom</h3>
              <p className="profil__anInfo">{localStorage.getItem('prenom')}</p>
            </div>

            <div className="profil__contentInfoClient">
              <h3>Email</h3>
              <p className="profil__anInfo">{localStorage.getItem('email')}</p>
            </div>
          </div>

          <div className="profil__modif">
            <button type="button" className="profil__btn" onClick={openModal}>
              Modifier mes informations
            </button>
            <button type="button" className="profil__btn">
              Modifier mon mot de passe
            </button>
            <button
              type="button"
              className="profil__btn"
              onClick={handleLogoutClick}
            >
              Se déconnecter
            </button>
            <button
              type="button"
              className="profil__btn"
              onClick={openModalSupp}
            >
              Supprimer mon compte
            </button>
          </div>
        </div>
      </div>

      {showModalModif && (
        <div className="modale">
          <div className="modale__content">
            <button
              className="modale__close"
              type="button"
              onClick={closeModal}
              aria-label="Close"
            >
              <i className="fa fa-close" />
            </button>
            <h2 className="modale__title">Modifier mes informations</h2>
            <form className="modale__form" onSubmit={handleSubmitModif}>
              <input
                className="modale__inputDesc"
                type="text"
                placeholder="Nom"
                name="nom"
                onChange={changeField}
                value={nom}
              />
              <input
                className="modale__inputDesc"
                type="text"
                placeholder="Prénom"
                name="prenom"
                onChange={changeField}
                value={prenom}
              />
              <button className="modale__btn" type="submit">
                Modifier mon profil
              </button>
            </form>
          </div>
        </div>
      )}

      {showModalSupp && (
        <div className="modale">
          <div className="modale__content">
            <button
              className="modale__close"
              type="button"
              onClick={closeModalSupp}
              aria-label="Close"
            >
              <i className="fa fa-close" />
            </button>
            <h2 className="modale__title">
              Êtes-vous sûr de vouloir supprimer votre compte ?
            </h2>
            <form className="modale__form" onSubmit={handleDeleteUser}>
              <button
                className="modale__btn"
                type="button"
                onClick={closeModalSupp}
              >
                Annuler
              </button>
              <button className="modale__btn" type="submit">
                Supprimer mon compte
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
