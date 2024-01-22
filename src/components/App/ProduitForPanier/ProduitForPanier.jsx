import './ProduitForPanier.scss';

export default function ProduitForPanier() {
    return (
        <div className='div__produitPanier'>
            <a href="/shop/nomduproduit">
                <article className='produitForPanier'>
                    <div className='produitForPanier__imgContainer' >
                        <img className='produitForEdit__photo' src="/Vetements/vrd.png" alt="" />
                    </div>
                    <h3>Veste WALLOW</h3>
                    <p className='produitForPanier__prix'>399 €</p>
                </article>
            </a>   
        </div>
    )
}