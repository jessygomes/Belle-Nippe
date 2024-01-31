import './MentionsLegales.scss';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';

export default function MentionsLegales() {
    return (
        <div>
            <Navbar />
            <div className='mentionsLegales'> 
                <h2 className='titlePage'>Mentions Légales</h2>
                <p className='mentionsLegales__message'>Grand texte</p>  
            </div> 
            <Footer />
        </div>   
    )
}