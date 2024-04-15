import './MentionsLegales.scss';
import { Helmet } from 'react-helmet';

export default function MentionsLegales() {
  return (
    <div>
      <Helmet>
        <title>Mentions Légales | Belle Nippe</title>
        <meta
          name="Mentions légales | Belle Nippe"
          content="Les mentions légales du site Belle Nippe"
        />
      </Helmet>
      <div className="mentionsLegales">
        <h2 className="titlePage">Mentions Légales</h2>
        <p className="mentionsLegales__message">Grand texte</p>
      </div>
    </div>
  );
}
