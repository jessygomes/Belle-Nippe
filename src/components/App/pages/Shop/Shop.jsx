import { useSelector } from 'react-redux';

import './Shop.scss';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import Produit from '../../Produit/Produit';

export default function Shop() {
    const items = useSelector((state) => state.shop.listItems);
    console.log('items:' , items)

    return (
        <div>
            <Navbar />
            <div className='categorie'>
                <h2 className='titlePage'>Shop</h2>
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
                {items.map((item) => (
                    <Produit 
                        key={item.id}
                        slug={item.slug} 
                        title={item.title}
                        price={item.price} 
                    />
                ))}
                {/* <Produit />
                <Produit />
                <Produit /> */}
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