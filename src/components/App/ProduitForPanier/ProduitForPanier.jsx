import './ProduitForPanier.scss';
// import { Trash } from "react-feather";

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
                    {/* <Trash size="100%" /> */}
                    <p className='produitForPanier__supp'>Supprimer</p>
                </article>
            </a>   
        </div>
    )
}