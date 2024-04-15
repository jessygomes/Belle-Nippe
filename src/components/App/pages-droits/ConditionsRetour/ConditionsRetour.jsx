import './ConditionsRetour.scss';
import { Helmet } from 'react-helmet';

export default function ConditionsRetour() {
  return (
    <div>
      <Helmet>
        <title>Conditions de retour | Belle Nippe</title>
        <meta
          name="Condition de retour | Belle Nippe"
          content="Conditions de retour des articles achetés sur le site Belle Nippe"
        />
      </Helmet>
      <div className="conditionsRetour">
        <h2 className="titlePage">Conditions de retour</h2>
        <p className="conditionsRetour__message">Grand texte</p>
      </div>
    </div>
  );
}
