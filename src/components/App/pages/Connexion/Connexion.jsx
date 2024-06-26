/* eslint-disable camelcase */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { changeFieldValue } from '../../../../store/Auth/connexionSlice';
import './Connexion.scss';

export default function Connexion() {
  const dispatch = useDispatch();
  const nav = useNavigate();

  //! Message Success
  const [successMessage, setSuccessMessage] = useState('');

  const { id, email, password, nom, prenom, is_logged, token, role } =
    useSelector((state) => state.connexion);

  function changeField(evt) {
    const { name, value } = evt.target;
    const action = changeFieldValue({ inputName: name, inputValue: value });
    dispatch(action);
  }

  function handleLogin() {
    const action = { type: 'LOGIN' };
    dispatch(action);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleLogin();
    setSuccessMessage('Vous êtes connecté(e) !');
    setTimeout(() => {
      setSuccessMessage('');
      console.log('Redirection en cours...');
      nav('/');
    }, 2000); // Redirige après 2 secondes
  }

  useEffect(() => {
    if (is_logged) {
      setSuccessMessage('Vous êtes connecté(e) !');
      localStorage.setItem('id', id);
      // localStorage.setItem('is_logged', true);
      localStorage.setItem('email', email);
      localStorage.setItem('nom', nom);
      localStorage.setItem('prenom', prenom);
      document.cookie = `id=${id}`;
      document.cookie = `token=${token}; HttpOnly; SameSite=Strict`;
      document.cookie = `token=${token}`;
      document.cookie = `is_logged=${is_logged}`;
      document.cookie = `role=${role}`;
      setTimeout(() => {
        setSuccessMessage('');
        console.log('Redirection en cours...');
        nav('/');
      }, 3000);
    }
  }, [is_logged, setSuccessMessage, nav, email, nom, prenom, id, token, role]);

  return (
    <div>
      <Helmet>
        <title>Connexion | Belle Nippe</title>
        <meta
          name=" Page de connexion | Belle Nippe"
          content="Se connecter sur le site Belle Nippe"
        />
      </Helmet>
      <div className="connexion">
        <h1 className="titlePage">Connexion</h1>
        {successMessage && (
          <p className="inscription__success">{successMessage}</p>
        )}
        <form className="connexion__form" onSubmit={handleSubmit}>
          <input
            className="connexion__input"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            minLength="2"
            maxLength="30"
            required
            onChange={changeField}
            value={email}
          />
          <input
            className="connexion__input"
            type="password"
            id="password"
            name="password"
            placeholder="Mot de passe"
            minLength="8"
            required
            onChange={changeField}
            value={password}
          />
          <button className="accueil__btn" type="submit">
            Se connecter
          </button>
          <Link to="/inscription" className="connexion__forgot">
            Mot de passe oublié ?
          </Link>
        </form>
        <div className="connexion__inscription">
          <p className="connexion__parag">Vous n'avez pas encore de compte ?</p>
          <Link to="/inscription" className="connexion__link">
            Créer un compte
          </Link>
        </div>
      </div>
    </div>
  );
}
