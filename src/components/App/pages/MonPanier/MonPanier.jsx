import './MonPanier.scss';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import ProduitForPanier from '../../ProduitForPanier/ProduitForPanier';
import { Link } from 'react-router-dom';


export default function MonPanier() {
    return (
        <div>
            <Navbar />
            <div className='panier'>
                <h2 className='titlePage'>Mon Panier</h2>
            </div>
            <div className='panier__list'>
                <ProduitForPanier />
                <ProduitForPanier />
            </div>
            <div className='panier__price'>
                <p>Total :</p>
                <p>798 €</p>
                {/* <Trash size="100%" color="#072A3D"/> */}
            </div>
            {/* <div className='lienVersPaiement'>
                <a className='lienVersCollection__links' href="/paiement">
                <button className='accueil__btn'>Paiement</button>
                </a>
            </div> */}
            <div className='lienVersCollection' id='paiement-btn'>
                <Link className='lienVersCollection__links' to="/shop">
                <button className='accueil__btn'>Paiement</button>
                </Link>
            </div>
            <Footer />
        </div>
    )
}