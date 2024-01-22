import './MonPanier.scss';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import ProduitForPanier from '../../ProduitForPanier/ProduitForPanier';


export default function MonPanier() {
    return (
        <div>
            <Navbar />
            <div className='panier'>
                <h2 className='titlePage__panier'>Mon Panier</h2>
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
            <div className='lienVersPaiement'>
                <a className='lienVersCollection__links' href="/paiement">
                <button className='accueil__btn'>Paiement</button>
                </a>
            </div>
            <Footer />
        </div>
    )
}