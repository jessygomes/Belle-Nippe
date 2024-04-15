import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './App.scss';

import Accueil from './Accueil/Accueil';
import Shop from './pages/Shop/Shop';
import Noise from './Noise/Noise';
import Editorial from './pages/Editorial/Editorial';
import MonPanier from './pages/MonPanier/MonPanier';
import Article from './Article/Article';
import Propos from './pages/Propos/Propos';
import Error from './Error/Error';
import ConditionUtilisation from './pages-droits/ConditionUtilisation/ConditionUtilisation';
import MentionsLegales from './pages-droits/MentionsLegales/MentionsLegales';
import CGV from './pages-droits/CGV/CGV';
import PolitiqueRetour from './pages-droits/PolitiqueRetour/PolitiqueRetour';
import PolitiqueConfidentialite from './pages-droits/PolitiqueConfidentialite/PolitiqueConfidentialite';
import ConditionsRetour from './pages-droits/ConditionsRetour/ConditionsRetour';
import Contact from './pages-droits/Contact/Contact';
import CollectionPage from './pages/CollectionPage/CollectionPage';
import Admin from './pages/Admin/Admin';
import SuccessPayment from './pages/SuccessPayment/SucessPayment';
import FailPayment from './pages/FailPayment/FailPayment';
import Connexion from './pages/Connexion/Connexion';
import Inscription from './pages/Inscription/Inscription';
import Profil from './pages/Profil/Profil';
import Order from './pages/Order/Order';
import OrdersAdmin from './pages/Admin/OrdersAdmin';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

function App() {
  const dispatch = useDispatch();

  function clearData() {
    localStorage.clear();
    // Effacez tous les cookies
    document.cookie.split(';').forEach((c) => {
      document.cookie = `${c.replace(/^ +/, '')}=;expires=${new Date().toUTCString()};path=/`;
    });
  }

  useEffect(() => {
    // Effacez les données après 2 heures
    const timeoutId = setTimeout(clearData, 2 * 60 * 60 * 1000);
    // Annulez le timeout lorsque le composant est démonté
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  //! Récupération des données via l'API au chargement initial de la page :
  useEffect(() => {
    console.log('Chargement initial');
    const action = { type: 'GET_ITEMS_FROM_API' };
    dispatch(action);
  }, [dispatch]);

  //! Permet de faire remonter le scroll de la page en haut à chaque changement de page :
  const currentPage = useLocation();
  useEffect(() => {
    // console.log('page change');
    window.scrollTo(0, 0);
  }, [currentPage]);

  //! Récupérer le rôle de l'utilisateur depuis les cookies
  const cooky = document.cookie.split('; ');
  const roleCookie = cooky.find((cook) => cook.startsWith('role='));
  const role = roleCookie ? roleCookie.split('=')[1] : null;

  //! Afin de ne pas afficher le Noise et la Navbar dans l'espace admin (location.pathname)
  const location = useLocation();

  return (
    <div className="container">
      {location.pathname !== '/admin' &&
        location.pathname !== '/admin/orders' && <Noise />}
      {location.pathname !== '/admin' &&
        location.pathname !== '/admin/orders' && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/collection/:collectionId" element={<Shop />} />
          <Route path="/shop/article/:slug" element={<Article />} />
          <Route path="/editorial" element={<Editorial />} />
          <Route
            path="/editorial/:collectionId/:collectionName"
            element={<CollectionPage />}
          />
          <Route path="/apropos" element={<Propos />} />
          <Route path="/monpanier" element={<MonPanier />} />
          <Route path="/order" element={<Order />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="/conditionutilisation"
            element={<ConditionUtilisation />}
          />
          <Route
            path="/politiquedeconfidentialite"
            element={<PolitiqueConfidentialite />}
          />
          <Route path="/politiquederetour" element={<PolitiqueRetour />} />
          <Route path="/conditionsderetour" element={<ConditionsRetour />} />
          <Route path="/cgv" element={<CGV />} />
          <Route path="/mentionslegales" element={<MentionsLegales />} />
          <Route path="*" element={<Error />} />
          <Route path="/admin/orders" element={<OrdersAdmin />} />
          <Route path="/success" element={<SuccessPayment />} />
          <Route path="/cancel" element={<FailPayment />} />

          {role === 'admin' ? (
            <Route path="/admin" element={<Admin />} />
          ) : (
            <Route path="/admin" element={<Error />} />
          )}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
