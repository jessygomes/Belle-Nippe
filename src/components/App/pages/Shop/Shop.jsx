import './Shop.scss';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import Produit from '../../Produit/Produit';

export default function Shop() {
    return (
        <div>
            <Navbar />
            <div className='categorie'>
                <h2 className='titlePage__shop'>Shop</h2>
                <div className='categorie__mobileContainer'>
                    <select className='categorie__select' name="" id="">
                        <option value="">Tous les produits</option>
                        <option value="">Haut</option>
                        <option value="">Bas</option>
                        <option value="">Ensembles</option>
                        <option value="">Accessoires</option>
                    </select>
                    <select className='categorie__select' name="" id="">
                        <option value="">Toutes les collections</option>
                        <option value="">Candy</option>
                    </select>
                    <input className='categorie__search' type="text" placeholder='Rechercher' />
                </div>
            </div>
            <div className='shop'>
                <Produit />
                <Produit />
                <Produit />
                <Produit />
                <Produit />
                <Produit />
                <Produit />
                <Produit />
            </div>
            <div className='lienVersCollection'>
                <a className='lienVersCollection__links' href="/shop">
                <button className='accueil__btn'>Charger</button>
                </a>
            </div>
            <Footer />
        </div>
    )
}