import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../../../store/monPanierSlice';
import './ProduitForPanier.scss';
// import { Trash } from "react-feather";

export default function ProduitForPanier({ item }) {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item));
  };

  return (
    <div className="div__produitPanier">
      <article className="produitForPanier">
        <Link to={`/shop/${item.slug}`}>
          <div className="produitForPanier__imgContainer">
            <img
              className="produitForEdit__photo"
              src="/Vetements/vrd.png"
              alt=""
            />
          </div>
        </Link>
        <h3 className="produitForPanier__name">{item.title}</h3>
        <p className="produitForPanier__prix">{item.price} €</p>
        <p className="produitForPanier__prix">Taille : {item.size}</p>
        <select className="produitForPanier__select" name="">
          {Array.from({ length: item.stock }, (_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        {/* <Trash size="100%" /> */}
        <button
          className="produitForPanier__supp"
          type="button"
          onClick={handleRemoveFromCart}
        >
          Supprimer
        </button>
      </article>
    </div>
  );
}
