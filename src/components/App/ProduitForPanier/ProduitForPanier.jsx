import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { removeFromCart, updateQuantity } from '../../../store/monPanierSlice';
import './ProduitForPanier.scss';

export default function ProduitForPanier({ item }) {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item));
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    // Supprimer l'article du panier
    const updatedCart = currentCart.filter(
      (cartItem) => cartItem.id !== item.id
    );
    // Réenregistrer le panier dans le localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const newQuantity = Number(e.target.value);
    setQuantity(newQuantity);
    dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));

    const currentCart = JSON.parse(localStorage.getItem('cart'));
    const existingItem = currentCart.find(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItem) {
      existingItem.quantity = newQuantity;
      localStorage.setItem('cart', JSON.stringify(currentCart));
    }
  };

  return (
    <div className="div__produitPanier">
      <article className="produitForPanier">
        <Link to={`/shop/${item.slug}`}>
          <div className="produitForPanier__imgContainer">
            <img
              className="produitForEdit__photo"
              src={
                item && item.images && item.images.length > 0
                  ? `http://localhost:3000/images/${item.images[0].url}`
                  : ''
              }
              alt=""
            />
          </div>
        </Link>
        <h3 className="produitForPanier__name">{item.title}</h3>
        <p className="produitForPanier__prix">{item.price} €</p>
        <p className="produitForPanier__prix">Taille : {item.size}</p>
        <select
          className="produitForPanier__select"
          name=""
          value={quantity}
          onChange={handleQuantityChange}
        >
          {Array.from({ length: item.stock }, (_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
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
