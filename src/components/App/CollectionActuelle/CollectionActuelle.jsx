import Produit from '../Produit/Produit';
import './CollectionActuelle.scss';

export default function CollectionActuelle() {
    return (
        <section className='coll' >
            <div className='collection'>
                <div className='collection__contenu'>
                    <div className='collection__title'>
                        {/* <img className='collection__logoSymbole' src="\Logo\logo-symbole-noir.png" alt="Logo Belle Nippe" /> */}
                        <h2 className='collection__name'>Candy's Collection</h2>
                        {/* <img className='collection__logoSymbole' src="\Logo\logo-symbole-noir.png" alt="Logo Belle Nippe" /> */}
                    </div>
                    
                    <div className='collection__divCouverture'>
                    <img className='collection__couverture' src="/fond-candy.png" alt="" />
                    </div>
                    
                    
                </div>

                <p className='collection__description'>La collection de vêtements haute couture intitulée "Candy" incarne l'essence audacieuse et éthique de l'upcycling. Conçue avec ingéniosité, cette ligne allie l'élégance de la haute couture et la mode streetwear à la durabilité environnementale. 
                <br /><br />    
                Chaque pièce de la collection "Candy" est méticuleusement créée à partir de matériaux recyclés et revalorisés, transformant ainsi des éléments autrefois oubliés en des œuvres d'art vestimentaires uniques. </p>
                {/* <div className='collection__cover'></div> */}
            </div>
            
            {/* <div className='collection'>
                <div className='collection__contenu'>
                    <img className='collection__couverture' src="public\Vetements\PhotoCollection.png" alt="" />
                </div>
            </div> */}

            <div className='presentationProduit'>
                <Produit />
                <Produit />
            </div>
            <div className='lienVersCollection'>
                <a className='lienVersCollection__links' href="/shop/:collection">
                <button className='accueil__btn'>Voir la collection</button>
                </a>
            </div>
        </section>
    )
}