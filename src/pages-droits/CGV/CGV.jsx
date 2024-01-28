import './CGV.scss';
import Footer from '../../components/App/Footer/Footer';
import Navbar from '../../components/App/Navbar/Navbar';

export default function CGV() {
    return (
        <div>
            <Navbar />
            <div className='cgv'> 
                <h2 className='titlePage'>Conditions Générales de Ventes</h2>
                <p className='cgv__message'>Grand texte</p>  
            </div> 
            <Footer />
        </div>
    )
}