import { NavLink } from 'react-router-dom';
import Footer from '../../Footer/Footer';
import './Admin.scss';
import Inventaire from '../../Inventaire/Inventaire';
import Commande from '../../Commande/Commande';

export default function Admin() {
  return (
    <div className="admin">
      <div className="admin__navbar">
        <NavLink className="accueil__logo" to="/">
          <img
            src="/Logo/1dfd1fef-d2c2-49ee-9616-be4b313175c0.png"
            alt="Logo belle Nippe"
          />
        </NavLink>
        <div className="admin__navbarcontainer">
          <nav className="admin__navbarLinks">
            <NavLink className="admin__link" to="/shop">
              Inventaire
            </NavLink>
            <NavLink className="admin__link" to="/editorial">
              Commandes
            </NavLink>
            <NavLink className="admin__link" to="/apropos">
              Collection
            </NavLink>
          </nav>
        </div>
      </div>
      <div className="admin__actions">
        <button className="admin__actionBtn">Ajouter un nouveau produit</button>
        <button className="admin__actionBtn">
          Créer une nouvelle collection
        </button>
        {/* <button className="admin__actionBtn">Ajouter un nouveau produit</button> */}
      </div>
      <div className="admin__onglet">
        <div className="admin__inventaire">
          <h2 className="admin__title">Inventaire</h2>
          <div className="admin__inventaireList">
            <Inventaire />
            <Inventaire />
            <Inventaire />
            <Inventaire />
            <Inventaire />
            <Inventaire />
            <Inventaire />
          </div>
        </div>
        <div className="admin__inventaire">
          <h2 className="admin__title">Commandes</h2>
          <div className="admin__inventaireList">
            <Commande />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
