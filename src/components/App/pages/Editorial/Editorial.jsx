import './Editorial.scss';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import ProduitForEdit from '../../ProduitForEdit/ProduitForEdit';

export default function Editorial() {
    return (
        <div>
            <Navbar />
            
            <div className='pageEdit'>
            <h2 className='titlePage'>Editorial</h2>
            </div>
            <div className='editorial'>
                <ProduitForEdit />
                <ProduitForEdit />
            </div>
            <Footer />
        </div>
    )
}