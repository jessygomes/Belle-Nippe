import './Produit.scss';

export default function Produit() {
    return (
        <div className='div__produit'>
            <a href="shop/nomArticle">
                <article className='produit'>
                    <div className='produit__imgContainer' >
                        <img className='produit__photo' src="/Vetements/vrd.png" alt="" />
                    </div>
                    <h3>Veste WALLOW</h3>
                    <p>399 €</p>
                </article>
            </a>   
        </div>
    )
}