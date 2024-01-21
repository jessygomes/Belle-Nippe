import './Editorial.scss';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import Produit from '../../Produit/Produit';

export default function Editorial() {
    return (
        <div>
            <Navbar />
            
            <div className='pageEdit'>
            <h2 className='titlePage'>Editorial</h2>
                <select className='pageEdit__select' name="" id="">
                    <option value="">Toutes les collections</option>
                    <option value="">Candy</option>
                </select>
            </div>
            <div className='editorial'>
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