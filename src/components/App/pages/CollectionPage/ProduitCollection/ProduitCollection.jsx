import './ProduitCollection.scss';

export default function ProduitCollection({ item }) {
  return (
    <div className="div__produitCollection">
      <article className="produitCollection">
        <div className="produitCollection__imgContainer">
          <img
            className="produitCollection__photo"
            src={
              item && item.images && item.images.length > 0
                ? `http://localhost:3000/images/${item.images[0].url}`
                : ''
            }
            alt={item.title}
          />
        </div>
      </article>
    </div>
  );
}
