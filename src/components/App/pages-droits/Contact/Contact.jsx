import './Contact.scss';
import { Helmet } from 'react-helmet';

export default function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contact | Belle Nippe</title>
        <meta
          name="Contact | Belle Nippe"
          content="Prenez contact avec Belle Nippe pour toute question ou demande de partenariat"
        />
      </Helmet>
      <div className="contact">
        <h2 className="titlePage">Contact</h2>
        <p className="contact__message">Grand texte</p>
      </div>
    </div>
  );
}
