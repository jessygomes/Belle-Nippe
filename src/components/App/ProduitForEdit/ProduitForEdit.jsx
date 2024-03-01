import { Link } from 'react-router-dom';
import './ProduitForEdit.scss';

export default function ProduitForEdit({ collectionName, collectionId }) {
  return (
    <div className="div__edit">
      <Link to={`/editorial/${collectionId}/${collectionName}`}>
        <article className="produitForEdit">
          <button className="produitForEdit__btn" type="button">
            Collection {collectionName}
          </button>
          {/* <h3 className="produitForEdit__name"></h3> */}
        </article>
      </Link>
    </div>
  );
}
