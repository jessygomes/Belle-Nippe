import './ProduitCollection.scss';

export default function ProduitCollection({ item }) {
  return (
    <div className="div__produitCollection">
      <article className="produitCollection">
        <div className="produitCollection__imgContainer">
          <img
            className="produitCollection__photo"
            src="/Vetements/vrd.png"
            alt={item.title}
          />
        </div>
      </article>
    </div>
  );
}
