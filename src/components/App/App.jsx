import Accueil from './Accueil/Accueil';
import './App.scss';
import Navbar from './Navbar/Navbar';
import Noise from './Noise/Noise';

function App() {
  return <div className="container">
    <Noise />
    <Accueil />
  </div>;
}

export default App;
