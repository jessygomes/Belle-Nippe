import Accueil from './Accueil/Accueil';
import './App.scss';
import CollectionActuelle from './CollectionActuelle/CollectionActuelle';
import Navbar from './Navbar/Navbar';
import Noise from './Noise/Noise';

function App() {
  return <div className="container">
    <Noise />
    <Navbar />
    <Accueil />
    <CollectionActuelle/>
  </div>;
}

export default App;
