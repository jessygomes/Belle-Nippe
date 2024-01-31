import './PolitiqueRetour.scss';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';

export default function PolitiqueRetour() {
    return (
        <div>
            <Navbar />
            <div className='politiqueRetour'> 
                <h2 className='titlePage'>Politique de retour</h2>
                <p className='politiqueretour__message'>Grand texte</p>  
            </div> 
            <Footer />
        </div>
    )
}