import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import Produit from '../Produit/Produit';
import './CollectionActuelle.scss';

export default function CollectionActuelle() {
  const dispatch = useDispatch();

  useEffect(() => {
    const action = { type: 'GET_ITEMS_FROM_API' };
    dispatch(action);
    const action2 = { type: 'GET_COLLECTIONS_FROM_API' };
    dispatch(action2);
    const action3 = { type: 'GET_CATEGORY_FROM_API' };
    dispatch(action3);
  }, [dispatch]);

  const collection = useSelector((state) => state.collection.listCollections);
  console.log('collection', collection);
  const lastCollection = collection[collection.length - 1];
  console.log('lastCollection', lastCollection);
  const items = useSelector((state) => state.shop.listItems);

  // Filtrer les articles qui appartiennent à la dernière collection
  let itemsInLastCollection = [];
  if (lastCollection) {
    itemsInLastCollection = items.filter(
      (item) => item.collection_id === Number(lastCollection.id)
    );
  }
  const firstTwoItems = itemsInLastCollection.slice(0, 2); // Utilisation de slice pour obtenir les deux premiers éléments de la liste d'items

  if (!lastCollection) {
    return <div>Loading...</div>;
  }
  return (
    <section className="coll">
      <div className="collection">
        <div className="collection__contenu">
          <div className="collection__title">
            <h2 className="collection__name">
              {lastCollection.titleCollection} Collection
            </h2>
          </div>
        </div>

        <p className="collection__description">
          {lastCollection.descriptionCollection} <br />
          La collection de vêtements haute couture intitulée "Candy" incarne
          l'essence audacieuse et éthique de l'upcycling. Conçue avec
          ingéniosité, cette ligne allie l'élégance de la haute couture et la
          mode streetwear à la durabilité environnementale.
          <br />
          <br />
          Chaque pièce de la collection "Candy" est méticuleusement créée à
          partir de matériaux recyclés et revalorisés, transformant ainsi des
          éléments autrefois oubliés en des œuvres d'art vestimentaires uniques.{' '}
        </p>
      </div>
      {/* <div className='collection'>
                <div className='collection__contenu'>
                    <img className='collection__couverture' src="public\Vetements\PhotoCollection.png" alt="" />
                </div>
            </div> */}

      <div className="presentationProduit">
        {firstTwoItems.map((item) => (
          <Produit
            key={item.id}
            slug={item.slug}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
      <div className="lienVersCollection">
        <Link
          className="lienVersCollection__links"
          to={`/shop/collection/${lastCollection.id}`}
        >
          <button className="accueil__btn" type="button">
            Voir la collection
          </button>
        </Link>
      </div>
    </section>
  );
}
