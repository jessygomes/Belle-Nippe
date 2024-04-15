import './Accueil.scss';
import { Helmet } from 'react-helmet';
import BigLienVersProduits from '../BigLienVersProduits/BigLienVersProduits';
import CollectionActuelle from '../CollectionActuelle/CollectionActuelle';

export default function Accueil() {
  return (
    <div>
      <Helmet>
        <title>Accueil | Belle Nippe</title>
        <meta
          name=" Page d'accueil | Belle Nippe"
          content="Page d'accueil du site, présente la marque et quelques articles de la dernière collection de Belle Nippe"
        />
      </Helmet>
      <header className="accueil">
        <div className="accueil__contenu">
          {/* <img className='accueil__logoBanner' src="/Logo/cc5bb833-9823-4997-abd1-86fd85044f37.png" alt="" />
                    <div className='accueil__banner'>
                        <p className='accueil__slogan'>Rendez-vous<span className='accueil__span'>bien nippé</span></p>
                    </div> */}
        </div>
        <div className="accueil__btnContainer">
          <a href="/shop">
            <button className="accueil__btn" type="button">
              Découvrir
            </button>
          </a>
        </div>
      </header>
      <CollectionActuelle />
      <BigLienVersProduits />
    </div>
  );
}
