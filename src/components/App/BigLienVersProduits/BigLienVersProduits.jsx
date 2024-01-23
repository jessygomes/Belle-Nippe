import { Link } from 'react-router-dom';
import './BigLienVersProduits.scss';

export default function BigLienVersProduits() {
    return (
        <section className='bigLien'>
            <div className='bigLien__vet'>
                <Link className='bigLien__vetement1' href="shop/vetements">
                    Vête <br /> ments
                    {/* <p className='bigLien__textVet'>Vête <br />ment</p> */}
                </Link>
                <Link className='bigLien__vetement2' href="shop/accessoires">
                    Acces <br /> soires
                    {/* <p className='bigLien__textVet2'>Accessoires</p> */}
                </Link>
            </div>
            <p className='bigLien__text'>L'Upcycling, une pratique novatrice dans le monde de la mode, émerge comme une réponse créative et durable aux défis de la surconsommation. <br /> <br /> En transformant des matériaux préexistants en pièces uniques de haute couture, l'upcycling redéfinit les normes de l'industrie.</p>
            <div className='photoShooting'>
                <img className='photoShooting__shot' src="/Vetements/cd3503a2-7f30-4758-b8b2-7105dfefabf7.jpg" alt="" />
                <img className='photoShooting__shot' src="/Vetements/44194839-163d-4d6f-b6fc-5520b00703bf.jpg" alt="" />
                <img className='photoShooting__shot' src="/Vetements/0c91b3ec-098c-484e-ba48-66c0c40a38fc.jpg" alt="" />
                <img className='photoShooting__shot' src="/Vetements/3672749d-ae5f-48fe-b17a-e56807c88886.jpg" alt="" />
            </div>        
        </section>
    )
}