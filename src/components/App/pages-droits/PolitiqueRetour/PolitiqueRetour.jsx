import './PolitiqueRetour.scss';
import { Helmet } from 'react-helmet';

export default function PolitiqueRetour() {
  return (
    <div>
      <Helmet>
        <title>Politique de retour | Belle Nippe</title>
        <meta
          name="Politique de retour | Belle Nippe"
          content="Politique de retour des articles achetés sur le site Belle Nippe"
        />
      </Helmet>
      <div className="politiqueRetour">
        <h2 className="titlePage">Politique de retour</h2>
        <p className="politiqueretour__message">Grand texte</p>
      </div>
    </div>
  );
}
