import './PolitiqueConfidentialite.scss';
import Footer from '../../components/App/Footer/Footer';
import Navbar from '../../components/App/Navbar/Navbar';

export default function PolitiqueConfidentialite() {
    return (
        <div>
            <Navbar />
            <div className='politiqueConfidentialite'> 
                <h2 className='titlePage'>Politique de Confidentialité</h2>
                <p className='PolitiqueConfidentialite__message'>Grand texte</p>  
            </div> 
            <Footer />
        </div>
    )
}