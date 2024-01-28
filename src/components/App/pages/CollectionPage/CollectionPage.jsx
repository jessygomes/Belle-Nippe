import './CollectionPage.scss';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import ProduitCollection from './ProduitCollection/ProduitCollection';

export default function CollectionPage() {
    return (
        <div>
            <Navbar />
            
            <div className='collectionPage'>
                <h2 className='titlePage'>Collection NAME</h2>
                <div className='collectionPage__produits'>
                    <ProduitCollection />
                    <ProduitCollection />
                    <ProduitCollection />
                    <ProduitCollection />
                    <ProduitCollection />
                    <ProduitCollection />
                </div>
            </div>
            <Footer />
        </div>
    )
}