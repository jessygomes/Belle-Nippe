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
import ConditionUtilisation from '../App/pages-droits/ConditionUtilisation/ConditionUtilisation';
import MentionsLegales from '../App/pages-droits/MentionsLegales/MentionsLegales';
import CGV from '../App/pages-droits/CGV/CGV';
import PolitiqueRetour from '../App/pages-droits/PolitiqueRetour/PolitiqueRetour';
import PolitiqueConfidentialite from '../App/pages-droits/PolitiqueConfidentialite/PolitiqueConfidentialite';
import ConditionsRetour from '../App/pages-droits/ConditionsRetour/ConditionsRetour';
import Contact from '../App/pages-droits/Contact/Contact';
import CollectionPage from './pages/CollectionPage/CollectionPage';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    console.log('Chargement initial');
    const action = { type: 'GET_ITEMS_FROM_API'};
    dispatch(action);
  }, [dispatch]);

  // Permet de faire remonter le scroll de la page en haut à chaque changement de page
  const currentPage = useLocation();
  useEffect(() => {
    // console.log('page change');
    window.scrollTo(0, 0);
  }, [currentPage]);

  return <div className="container">
    <Noise />
    <Routes>
      <Route path="/" element={<Accueil />} />

      <Route path="/shop" element={<Shop />} />
      <Route path='/shop/:slug' element={<Article />} />

      <Route path="/editorial" element={<Editorial />} />
      <Route path='/editorial/:slug' element={<CollectionPage />} />

      <Route path="/apropos" element={<Propos/>} />
      <Route path="/monpanier" element={<MonPanier />} />

      <Route path="contact" element={<Contact />} />
      <Route path="/conditionutilisation" element={<ConditionUtilisation />} />
      <Route path="/politiquedeconfidentialite" element={<PolitiqueConfidentialite />} />
      <Route path="/politiquederetour" element={<PolitiqueRetour />} />
      <Route path="/conditionsderetour" element={<ConditionsRetour />} />
      <Route path="/cgv" element={<CGV />} />
      <Route path="/mentionslegales" element={<MentionsLegales />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </div>;
}

export default App;
