import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import './Inscription.scss';
import { changeFieldValue } from '../../../../store/Auth/inscriptionSlice';

export default function Inscription() {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const { nom, prenom, email, password, error, message } = useSelector(
    (state) => state.inscription
  );

  const {
    id: idConnexion,
    nom: nomConnexion,
    prenom: prenomCollection,
    email: emailConnexion,
    role: roleConnexion,
    token: tokenConnexion,
    is_logged: isLogged,
  } = useSelector((state) => state.connexion);

  //! Confirmation du mot de passe
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const [errorMessage, setErrorMessage] = useState('');

  //! Message Success
  const [successMessage, setSuccessMessage] = useState('');

  //! Envoi des données au submit
  function changeField(evt) {
    const { name, value } = evt.target;
    const action = changeFieldValue({ inputName: name, inputValue: value });
    dispatch(action);
  }

  function handleSignup() {
    const action = { type: 'SIGNUP' };
    dispatch(action);
  }

  useEffect(() => {
    if (error) {
      setErrorMessage('Cette email est déjà utilisé');
    }
    if (message) {
      setErrorMessage('');
      setSuccessMessage('Votre compte a bien été créé');
      setTimeout(() => {
        localStorage.setItem('id', idConnexion);
        // localStorage.setItem('is_logged', true);
        localStorage.setItem('email', emailConnexion);
        localStorage.setItem('nom', nomConnexion);
        localStorage.setItem('prenom', prenomCollection);
        document.cookie = `id=${idConnexion}`;
        document.cookie = `token=${tokenConnexion}; HttpOnly; SameSite=Strict`;
        document.cookie = `token=${tokenConnexion}`;
        document.cookie = `is_logged=${isLogged}`;
        document.cookie = `role=${roleConnexion}`;
        localStorage.setItem('cart', JSON.stringify([]));
        setSuccessMessage('');
        console.log('Redirection en cours...');
        nav('/');
      }, 2000);
    }
  }, [
    error,
    nav,
    idConnexion,
    tokenConnexion,
    isLogged,
    emailConnexion,
    nomConnexion,
    prenomCollection,
    roleConnexion,
    message,
  ]);

  function handleSubmit(evt) {
    evt.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Les mots de passe ne correspondent pas');
      return;
    }
    if (password.length < 8) {
      setErrorMessage('Le mot de passe doit contenir au moins 8 caractères');
      return;
    }
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!regex.test(password)) {
      setErrorMessage(
        'Le mot de passe doit contenir au moins une majuscule, un chiffre et un caractère spécial'
      );
      return;
    }

    handleSignup();
  }

  return (
    <div>
      <Navbar />
      <div className="inscription">
        <h1 className="titlePage">Inscription</h1>
        {errorMessage && <p className="inscription__error">{errorMessage}</p>}
        {successMessage && (
          <p className="inscription__success">{successMessage}</p>
        )}
        <form className="inscription__form" onSubmit={handleSubmit}>
          <input
            className="inscription__input"
            type="text"
            name="nom"
            placeholder="Nom"
            minLength="2"
            maxLength="30"
            required
            onChange={changeField}
            value={nom}
          />
          <input
            className="inscription__input"
            type="text"
            name="prenom"
            placeholder="Prénom"
            minLength="2"
            maxLength="30"
            required
            onChange={changeField}
            value={prenom}
          />
          <input
            className="inscription__input"
            type="email"
            name="email"
            placeholder="Email"
            minLength="2"
            maxLength="30"
            required
            onChange={changeField}
            value={email}
          />
          <input
            className="inscription__input"
            type="password"
            name="password"
            placeholder="Mot de passe"
            minLength="8"
            required
            onChange={changeField}
            value={password}
          />
          <input
            className="inscription__input"
            type="password"
            name="confirmPassword"
            placeholder="Confirmez le mot de passe"
            minLength="8"
            required
            onChange={handleConfirmPassword}
            value={confirmPassword}
          />
          <button className="accueil__btn" type="submit">
            Créer mon compte
          </button>
        </form>
        <div className="inscription__inscription">
          <p className="inscription__parag">Vous avez déjà un compte ?</p>
          <Link to="/connexion" className="inscription__link">
            Connectez-vous
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
