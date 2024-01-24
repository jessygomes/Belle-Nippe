import './Accueil.scss';
import BigLienVersProduits from '../BigLienVersProduits/BigLienVersProduits';
import CollectionActuelle from '../CollectionActuelle/CollectionActuelle';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { NavLink } from 'react-router-dom';

export default function Accueil() {
    return (
        <div>
            <header className="accueil">
                <div className='accueil__contenu'>
                        <img className='accueil__logoBanner' src="/Logo/cc5bb833-9823-4997-abd1-86fd85044f37.png" alt="" />
                    {/* <div className='accueil__banner'>
                        <p className='accueil__slogan'>Rendez-vous<span className='accueil__span'>bien nippé</span></p>
                    </div> */}
                </div>
                <div className='accueil__btnContainer'>
                    <a  href="/shop">
                        <button className='accueil__btn'>Découvrir</button>
                    </a>
                </div>
            </header>
            <Navbar />
            <CollectionActuelle/>
            <BigLienVersProduits />
            <Footer />
        </div> 
    )
}