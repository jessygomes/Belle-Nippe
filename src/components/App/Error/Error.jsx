import './Error.scss';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import { Carousel, ConfigProvider } from 'antd';
import { Content } from 'antd/es/layout/layout';

export default function Error() {
    
   let carousel =  <Carousel effect="fade" autoplay>
            <div>
                <h3  style={{display: 'flex', justifyContent: 'space-between', background: 'green', height: '500px',width: '500px'}}><img src="/Vetements/vrd.png" alt="" /></h3>
            </div>
            <div>
                <h3 style={{display: 'flex', justifyContent: 'space-between', background: 'green', height: '500px',width: '500px'}}><img src="\Vetements\Vet 5.png" alt="" /></h3>
            </div>
            <div >
                <h3 style={{display: 'flex', justifyContent: 'space-between', background: 'green', height: '500px',width: '500px'}}> <img src="/Vetements/Vet 6.png" alt="" /></h3>
            </div>
            <div >
                <h3 style={{display: 'flex', justifyContent: 'space-between', background: 'green', height: '500px',width: '500px'}}> <img src="/Vetements/Vet 5.png" alt="" /></h3>
            </div>
        </Carousel>

    return (
        <div>
            <Navbar />
            <Content style={{width: '35rem', padding: '0px 0px'}}>{carousel}</Content>
           

            <div className='error'> 
                <h2 className='error__title'>Erreur</h2>
                <p className='error__message'>Nous sommes désolé, une erreur s'est produite.</p>  
            </div> 
            <Footer />
        </div>
        
    )
}