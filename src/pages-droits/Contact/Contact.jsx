import './Contact.scss';
import Footer from '../../components/App/Footer/Footer';
import Navbar from '../../components/App/Navbar/Navbar';

export default function Contact() {
    return (
        <div>
            <Navbar />
            <div className='contact'> 
                <h2 className='titlePage'>Contact</h2>
                <p className='contact__message'>Grand texte</p>  
            </div> 
            <Footer />
        </div>
    )
}