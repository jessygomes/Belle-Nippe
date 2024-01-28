import './ConditionsRetour.scss';
import Footer from '../../components/App/Footer/Footer';
import Navbar from '../../components/App/Navbar/Navbar';

export default function ConditionsRetour() {
    return (
        <div>
            <Navbar />
            <div className='conditionsRetour'> 
                <h2 className='titlePage'>Conditions de retours</h2>
                <p className='conditionsRetour__message'>Grand texte</p>  
            </div> 
            <Footer />
        </div>
    )
}