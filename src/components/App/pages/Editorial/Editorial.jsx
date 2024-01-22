import './Editorial.scss';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import ProduitForEdit from '../../../../ProduitForEdit/ProduitForEdit';

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
                <ProduitForEdit />
                <ProduitForEdit />
                <ProduitForEdit />
                <ProduitForEdit />
                <ProduitForEdit />
                <ProduitForEdit />
                <ProduitForEdit />
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