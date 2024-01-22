import './Propos.scss';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import ProduitForEdit from '../../../../ProduitForEdit/ProduitForEdit';

export default function Propos() {
    return (
        <div>
            <Navbar />
            
            <div className='pageEdit'>
            <h2 className='titlePage'>A Propos</h2>
            </div>
            <Footer />
        </div>
    )
}