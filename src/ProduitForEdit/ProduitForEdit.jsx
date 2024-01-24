import './ProduitForEdit.scss';

export default function ProduitForEdit() {
    return (
        <div className='div__edit'>
            <a href="/shop/nomduproduit">
                <article className='produitForEdit'>
                    <div className='produitForEdit__imgContainer' >
                        <img className='produitForEdit__photo' src="/Vetements/vrd.png" alt="" />
                    </div>
                    <h3 className='produitForEdit__name'>Veste WALLOW</h3>
                </article>
            </a>   
        </div>
    )
}