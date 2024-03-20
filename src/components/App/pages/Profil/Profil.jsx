import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import './Profil.scss';
import {
  changeFieldValue,
  handleLogout,
} from '../../../../store/Auth/connexionSlice';

export default function Profil() {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const { nom, prenom } = useSelector((state) => state.connexion);

  //! Gestion des modals
  const [showModalModif, setShowModalModif] = useState(false);

  const openModal = () => {
    setShowModalModif(true);
  };
  const closeModal = () => {
    setShowModalModif(false);
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

  return (
    <div>
      <Navbar />
      <div className="profil">
        <h1 className="titlePage">Mon Compte</h1>
        <div className="profil__container">
          <h2 className="profil__title2">Mes commandes</h2>
          <div className="profil__orderClient">
            <div className="profil__commande">
              <p>Commande du 00/00/00</p>
              <p>Numéro de commande : 00000000</p>
              <p>Montant : 0,00 €</p>
              <p>Statut : En cours de traitement</p>
              <ul>
                <li>Articles :</li>
                <li>- Veste Wallow</li>
                <li>- Pantalon Candy</li>
              </ul>
            </div>
            <div className="profil__commande">
              <p>Commande du 00/00/00</p>
              <p>Numéro de commande : 00000000</p>
              <p>Montant : 0,00 €</p>
              <p>Statut : En cours de traitement</p>
              <ul>
                <li>Articles :</li>
                <li>- Veste Wallow</li>
                <li>- Pantalon Candy</li>
              </ul>
            </div>
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

      <Footer />
    </div>
  );
}
