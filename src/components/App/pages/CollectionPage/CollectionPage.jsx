import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProduitCollection from './ProduitCollection/ProduitCollection';
import './CollectionPage.scss';

export default function CollectionPage() {
  const { collectionId, collectionName } = useParams();
  console.log(collectionId);
  const items = useSelector((state) => state.shop.listItems).filter(
    (item) => item.collection_id === Number(collectionId)
  );
  return (
    <div>
      <div className="collectionPage">
        <h2 className="titlePage">{collectionName}</h2>
        <div className="collectionPage__produits">
          {items.map((item) => (
            <ProduitCollection key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
