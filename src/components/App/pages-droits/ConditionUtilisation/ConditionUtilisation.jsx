import './ConditionUtilisation.scss';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';

export default function ConditionUtilisation() {
    return (
        <div>
            <Navbar />
            <div className='conditionUtilisation'> 
                <h2 className='titlePage'>Conditions d'utilisation</h2>
                <p className='conditionUtilisation__message'>Grand texte</p>  
            </div> 
            <Footer />
        </div>      
    )
}