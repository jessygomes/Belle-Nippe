import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Article.scss';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { findItem } from '../../../selectors/items'

export default function Article() {

    const { slug } = useParams();
    console.log('Slug:', slug)
    const item = useSelector((state) => findItem(state.shop.listItems, slug));

    if (!item) {
        return <Navigate to="/error" replace />;
    }

    const [currentSlide, setCurrentSlide] = useState(0);

    const onChange = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div>
            <Navbar />
            <div className='div__article'>
                    <article className='article'>
                        <div className='article__imgContainer'>
                            <Carousel showArrows={true} onChange={onChange} selectedItem={currentSlide} showThumbs={false} showStatus={false}>
                                <div>
                                    <img className='article__photo' src="/Vetements/vrd.png" />
                                </div>
                                <div>
                                    <img className='article__photo' src="\Vetements\Vet 5.png" />
                                </div>
                                <div>
                                    <img className='article__photo' src="/Vetements/Vet 6.png" />
                                </div>
                                <div>
                                    <img className='article__photo' src="/Vetements/vrd.png"/>
                                </div>
                                <div>
                                    <img className='article__photo' src="/Vetements/Vet 6.png" />
                                </div>
                            </Carousel>
                        </div>
                         

                        <div className='article__description'>
                            <h3 className='article__title article__desc'>{item.title}</h3>
                            <p className='article__price article__desc'>{item.price} €</p>
                            <p className='article__unique article__desc'>{item.stock} Pièce(s) - Taille {item.taille}</p>
                            <p className='article__explain article__desc'>Description : {item.description}</p>
                            <div className='lienVersAjoutPanier'>
                                <Link className='lienVersCollection__links' to="/monpanier">
                                    <button className='article__btn'>Ajouter au Panier</button>
                                </Link>
                            </div>
                        </div>
                    </article>
                    {/* <div className='otherImg'>
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
                    </div> */}  
            </div>
            <Footer/>
        </div> 
    )
}