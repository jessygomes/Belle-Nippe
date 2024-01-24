import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Article.scss';

export default function Article() {
    return (
        <div>
            <Navbar />
            <div className='div__article'>
                    <article className='article'>
                        <div className='article__imgContainer' >
                            <img className='article__photo' src="/Vetements/vrd.png" alt="" />
                        </div>
                        <div className='article__description'>
                            <h3 className='article__title article__desc'>Veste WALLOW</h3>
                            <p className='article__price article__desc'>399 €</p>
                            <p className='article__unique article__desc'>Pièce unique - Taille L</p>
                            <p className='article__explain article__desc'>Description : Article upccling a partir de jean de de soie ainsi que tous les élements artistique de ma démarche créative pour confectionner une oeuvre.  <br /> Entretien : laver à la main et ne pas mettre à la machine à laver.</p>
                            <div className='lienVersAjoutPanier'>
                                <a className='lienVersCollection__links' href="/shop">
                                    <button className='article__btn'>Ajouter au Panier</button>
                                </a>
                            </div>
                        </div>
                    </article>
                    <div className='otherImg'>
                        <div className='article__imgContainer2' >
                            <img className='article__photo' src="\Vetements\Vet 5.png" alt="" />
                        </div>
                        <div className='article__imgContainer2' >
                            <img className='article__photo' src="/Vetements/Vet 6.png" alt="" />
                        </div>
                        <div className='article__imgContainer2' >
                            <img className='article__photo' src="\Vetements\Vet 5.png" alt="" />
                        </div>
                        <div className='article__imgContainer2' >
                            <img className='article__photo' src="/Vetements/Vet 6.png" alt="" />
                        </div>
                    </div>
                   
            </div>
            <Footer/>
        </div>
       
    )
}