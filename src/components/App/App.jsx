import { Route, Routes, useLocation } from 'react-router-dom';
import Accueil from './Accueil/Accueil';
import Shop from './pages/Shop/Shop';
import Noise from './Noise/Noise';
import Editorial from './pages/Editorial/Editorial';
import './App.scss';
import MonPanier from './pages/MonPanier/MonPanier';
import Article from './Article/Article';
import Propos from './pages/Propos/Propos';
import { useEffect } from 'react';
import Error from './Error/Error';

function App() {

  // Permet de faire remonter le scroll de la page en haut à chaque changement de page
  const currentPage = useLocation();
  useEffect(() => {
    console.log('page change');
    window.scrollTo(0, 0);
  }, [currentPage]);

  return <div className="container">
    <Noise />
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="editorial" element={<Editorial />} />
      <Route path="apropos" element={<Propos/>} />
      <Route path="monpanier" element={<MonPanier />} />
      <Route path="shop/nomArticle" element={<Article />} />
      {/* <Route path="contact" element={<Contact />} />
      <Route path="conditionutilisation" element={<ConditionUtilisation />} />
      <Route path="politiquedeconfidentialite" element={<PolitiqueDeConfidentialite />} />
      <Route path="politiquederetour" element={<PpolitiqueDeRetour />} />
      <Route path="conditionsderetour" element={<ConditionsDeRetour />} />
      <Route path="cgv" element={<CGV />} />
      <Route path="mentionslegales" element={<MentionsLegales />} /> */}
      <Route path="*" element={<Error />} />
    </Routes>
  </div>;
}

export default App;
