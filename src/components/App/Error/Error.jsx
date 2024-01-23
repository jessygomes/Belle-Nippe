import './Error.scss';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

export default function Error() {
    return (
        <div>
            <Navbar />
            <div className='error'> 
                <h2 className='error__title'>Erreur</h2>
                <p>Nous sommes désolé, une erreur s'est produite.</p>  
            </div> 
            <Footer />
        </div>
        
    )
}