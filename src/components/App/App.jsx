import Accueil from './Accueil/Accueil';
import './App.scss';
import BigLienVersProduits from './BigLienVersProduits/BigLienVersProduits';
import CollectionActuelle from './CollectionActuelle/CollectionActuelle';
import Navbar from './Navbar/Navbar';
import Noise from './Noise/Noise';

function App() {
  return <div className="container">
    <Noise />
    <Navbar />
    <Accueil />
    <CollectionActuelle/>
    <BigLienVersProduits />
  </div>;
}

export default App;
