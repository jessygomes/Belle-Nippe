import './CGV.scss';
import { Helmet } from 'react-helmet';

export default function CGV() {
  return (
    <div>
      <Helmet>
        <title>CGV | Belle Nippe</title>
        <meta
          name="Conditions Générales de Vente | Belle Nippe"
          content="Conditions Générales de Vente du site Belle Nippe"
        />
      </Helmet>
      <div className="cgv">
        <h2 className="titlePage">Conditions Générales de Ventes</h2>
        <p className="cgv__message">Grand texte</p>
      </div>
    </div>
  );
}
