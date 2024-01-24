import { Link } from 'react-router-dom';
import './Produit.scss';

export default function Produit() {
    return (
        <div className='div__produit'>
            <Link to="shop/nomArticle">
                <article className='produit'>
                    <div className='produit__imgContainer' >
                        <img className='produit__photo' src="/Vetements/vrd.png" alt="" />
                    </div>
                    <h3 className='produit__name'>Veste WALLOW</h3>
                    <p className='produit__price'>399 €</p>
                </article>
            </Link>   
        </div>
    )
}