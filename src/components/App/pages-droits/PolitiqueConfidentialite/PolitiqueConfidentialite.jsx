import './PolitiqueConfidentialite.scss';
import { Helmet } from 'react-helmet';

export default function PolitiqueConfidentialite() {
  return (
    <div>
      <Helmet>
        <title>Politique de Confidentialité | Belle Nippe</title>
        <meta
          name="Politique de Confidentialité | Belle Nippe"
          content="Politique de Confidentialité du site Belle Nippe"
        />
      </Helmet>
      <div className="politiqueConfidentialite">
        <h2 className="titlePage">Politique de Confidentialité</h2>
        <p className="PolitiqueConfidentialite__message">Grand texte</p>
      </div>
    </div>
  );
}
