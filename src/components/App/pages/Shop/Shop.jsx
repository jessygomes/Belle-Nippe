import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import Produit from '../../Produit/Produit';
import './Shop.scss';

export default function Shop() {
  const dispatch = useDispatch();
  const { collectionId } = useParams();

  //! RECUPERATION DES DONNEES VIA L'API AU CHARGEMENT INITIAL DE LA PAGE
  useEffect(() => {
    const action = { type: 'GET_ITEMS_FROM_API' };
    dispatch(action);
    const action2 = { type: 'GET_COLLECTIONS_FROM_API' };
    dispatch(action2);
    const action3 = { type: 'GET_CATEGORY_FROM_API' };
    dispatch(action3);
  }, [dispatch]);

  //! DONNEES RECUPEREES VIA LE STORE
  const collections = useSelector((state) => state.collection.listCollections);
  const categories = useSelector((state) => state.category.listCategories);

  //! GESTION DES FILTRES
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [selectedCollectionId, setSelectedCollectionId] = useState(
    collectionId || ''
  );
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategoryId(event.target.value);
  };
  const handleCollectionChange = (event) => {
    setSelectedCollectionId(event.target.value);
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const activeCollections = collections.filter(
    (collection) => collection.is_active
  );

  // const items = useSelector((state) => state.shop.listItems).filter(
  //   (item) =>
  //     (selectedCategoryId === '' ||
  //       item.category_id === Number(selectedCategoryId)) &&
  //     (selectedCollectionId === '' ||
  //       item.collection_id === Number(selectedCollectionId) ||
  //       activeCollections.some(
  //         (collection) => collection.id === item.collection_id
  //       )) &&
  //     (searchTerm === '' ||
  //       item.title.toLowerCase().includes(searchTerm.toLowerCase()))
  // );
  const items = useSelector((state) => state.shop.listItems).filter(
    (item) =>
      (selectedCategoryId === '' ||
        item.category_id === Number(selectedCategoryId)) &&
      (selectedCollectionId === '' ||
        item.collection_id === Number(selectedCollectionId)) &&
      (searchTerm === '' ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const activeItems = items.filter((item) => item.is_active && item.stock > 0);

  if (!activeItems) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Helmet>
        <title>Shop | Belle Nippe</title>
        <meta
          name=" Page Shopping | Belle Nippe"
          content="Les vêtements en vente de la marque Belle Nippe"
        />
      </Helmet>
      <div className="categorie">
        <h1 className="titlePage">Shop</h1>
        <div className="categorie__mobileContainer">
          <select
            className="categorie__select"
            name=""
            onChange={handleCategoryChange}
          >
            <option value="">Tous les produits</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name_category}
              </option>
            ))}
          </select>

          <select
            className="categorie__select"
            name=""
            value={selectedCollectionId}
            onChange={handleCollectionChange}
          >
            <option className="categorie__option" value="">
              Toutes les collections
            </option>
            {activeCollections.map((collection) => (
              <option
                className="categorie__option"
                key={collection.id}
                value={collection.id}
              >
                {collection.title_collection}
              </option>
            ))}
          </select>

          <input
            className="categorie__search"
            type="text"
            placeholder="Rechercher"
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <main className="shop">
        {activeItems.map((item) => (
          <Produit
            key={item.id}
            slug={item.slug}
            title={item.title}
            price={item.price}
            image={item.images[0].url}
          />
        ))}
      </main>
      {/* <div className="lienVersCollection">
        <a className="lienVersCollection__links" href="/shop">
          <button className="accueil__btn" type="button">
            Charger
          </button>
        </a>
      </div> */}
    </div>
  );
}
