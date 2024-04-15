import './ConditionUtilisation.scss';
import { Helmet } from 'react-helmet';

export default function ConditionUtilisation() {
  return (
    <div>
      <Helmet>
        <title>Condition d'utilisation | Belle Nippe</title>
        <meta
          name="Condition d'utilisation | Belle Nippe"
          content="Condition d'utilisation du site Belle Nippe"
        />
      </Helmet>
      <div className="conditionUtilisation">
        <h2 className="titlePage">Conditions d'utilisation</h2>
        <p className="conditionUtilisation__message">Grand texte</p>
      </div>
    </div>
  );
}
