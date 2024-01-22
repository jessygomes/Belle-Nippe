import { Route, Routes } from 'react-router-dom';
import Accueil from './Accueil/Accueil';
import Shop from './pages/Shop/Shop';
import Noise from './Noise/Noise';
import Editorial from './pages/Editorial/Editorial';
import './App.scss';
import MonPanier from './pages/MonPanier/MonPanier';

function App() {
  return <div className="container">
    <Noise />
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="editorial" element={<Editorial />} />
      {/* <Route path="apropos" element={<Propos />} /> */}
      <Route path="monpanier" element={<MonPanier />} />
      {/* <Route path="contact" element={<Contact />} />
      <Route path="conditionutilisation" element={<ConditionUtilisation />} />
      <Route path="politiquedeconfidentialite" element={<PolitiqueDeConfidentialite />} />
      <Route path="politiquederetour" element={<PpolitiqueDeRetour />} />
      <Route path="conditionsderetour" element={<ConditionsDeRetour />} />
      <Route path="cgv" element={<CGV />} />
      <Route path="mentionslegales" element={<MentionsLegales />} /> */}
    </Routes>
  </div>;
}

export default App;
