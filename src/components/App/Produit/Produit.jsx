import { Link } from 'react-router-dom';
import './Produit.scss';

export default function Produit({ title, price, slug }) {
    return (
        <div className='div__produit'>
            <Link to={`/shop/${slug}`}>
                <article className='produit'>
                    <div className='produit__imgContainer' >
                        <img className='produit__photo' src="/Vetements/vrd.png" alt="" />
                    </div>
                    <h3 className='produit__name'>{title}</h3>
                    <p className='produit__price'>{price} €</p>
                </article>
            </Link>   
        </div>
    )
}