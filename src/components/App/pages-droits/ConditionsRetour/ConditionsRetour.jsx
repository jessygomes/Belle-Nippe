import './ConditionsRetour.scss';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';

export default function ConditionsRetour() {
    return (
        <div>
            <Navbar />
            <div className='conditionsRetour'> 
                <h2 className='titlePage'>Conditions de retour</h2>
                <p className='conditionsRetour__message'>Grand texte</p>  
            </div> 
            <Footer />
        </div>
    )
}