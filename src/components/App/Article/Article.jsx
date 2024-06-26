import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Article.scss';
import { findItem } from '../../../selectors/items';
import { addToCart } from '../../../store/monPanierSlice';

export default function Article() {
  const dispatch = useDispatch();
  // Permet de paramétrer la route dynamique avec le slug contenu en base de données puis
  // Lecture des éléments du state 'shop' du store en récupérant qu'une seule data grâce à la fonction importée 'findItem' crée dans le fichier 'selector' :
  const { slug } = useParams();
  const item = useSelector((state) => findItem(state.shop.listItems, slug));

  const [currentSlide, setCurrentSlide] = useState(0);

  if (!item) {
    return <Navigate to="/error" replace />;
  }

  //! Carrousel pour les images des articles :
  const onChange = (index) => {
    setCurrentSlide(index);
  };

  const handleAddToCart = () => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = currentCart.find(
      (cartItem) => cartItem.id === item.id
    );
    if (!existingItem) {
      currentCart.push({ ...item, quantity: 1 });
      localStorage.setItem('cart', JSON.stringify(currentCart));
      dispatch(addToCart(item));
    } else {
      console.log('Cet article est déjà dans le panier');
    }
  };

  return (
    <div>
      <Helmet>
        <title>{`${item.title} | Belle Nippe`}</title>
        <meta
          name=" Page Article | Belle Nippe"
          content="Vêtement de la marque Belle Nippe"
        />
      </Helmet>
      <div className="div__article">
        <article className="article">
          <div className="article__imgContainer">
            <Carousel
              showArrows
              onChange={onChange}
              selectedItem={currentSlide}
              showThumbs
              showStatus={false}
            >
              {item &&
                item.images &&
                item.images.map((image) => (
                  <div key={image.url}>
                    <img
                      className="article__photo"
                      src={`http://localhost:3000/images/${image.url}`}
                      alt={item.title}
                    />
                  </div>
                ))}
            </Carousel>
          </div>

          <div className="article__description">
            <h3 className="article__title article__desc">{item.title}</h3>
            <p className="article__price article__desc">{item.price} €</p>
            <p className="article__unique article__desc">
              {item.stock} Pièce(s) - Taille {item.size}
            </p>
            <p className="article__explain article__desc">
              Description : {item.description}
            </p>
            <div className="lienVersAjoutPanier">
              <Link className="lienVersCollection__links" to="/monpanier">
                <button
                  className="article__btn"
                  type="button"
                  onClick={handleAddToCart}
                >
                  Ajouter au Panier
                </button>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
