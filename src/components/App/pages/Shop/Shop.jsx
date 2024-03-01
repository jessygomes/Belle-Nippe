import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import Produit from '../../Produit/Produit';
import './Shop.scss';

export default function Shop() {
  // const dispatch = useDispatch();
  const { collectionId } = useParams();

  // useEffect(() => {
  //   const action = { type: 'GET_ITEMS_FROM_API' };
  //   dispatch(action);
  //   const action2 = { type: 'GET_COLLECTIONS_FROM_API' };
  //   dispatch(action2);
  //   const action3 = { type: 'GET_CATEGORY_FROM_API' };
  //   dispatch(action3);
  // }, [dispatch]);

  const collections = useSelector((state) => state.collection.listCollections);
  const categories = useSelector((state) => state.category.listCategories);
  console.log('category', categories);

  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [selectedCollectionId, setSelectedCollectionId] = useState(
    collectionId || ''
  );
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategoryId(event.target.value);
    console.log('selectedcategoryID', selectedCategoryId);
  };
  const handleCollectionChange = (event) => {
    setSelectedCollectionId(event.target.value);
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const items = useSelector((state) => state.shop.listItems).filter(
    (item) =>
      (selectedCategoryId === '' ||
        item.category_ids === Number(selectedCategoryId)) &&
      (selectedCollectionId === '' ||
        item.collection_id === Number(selectedCollectionId)) &&
      (searchTerm === '' ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div>
      <Navbar />
      <div className="categorie">
        <h2 className="titlePage">Shop</h2>
        <div className="categorie__mobileContainer">
          <select
            className="categorie__select"
            name=""
            onChange={handleCategoryChange}
          >
            <option value="">Tous les produits</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>

          <select
            className="categorie__select"
            name=""
            value={selectedCollectionId}
            onChange={handleCollectionChange}
          >
            <option value="">Toutes les collections</option>
            {collections.map((collection) => (
              <option key={collection.id} value={collection.id}>
                {collection.title}
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
      <div className="shop">
        {items.map((item) => (
          <Produit
            key={item.id}
            slug={item.slug}
            title={item.title}
            price={item.price}
            image={item.images[0]}
          />
        ))}
      </div>
      {/* <div className="lienVersCollection">
        <a className="lienVersCollection__links" href="/shop">
          <button className="accueil__btn" type="button">
            Charger
          </button>
        </a>
      </div> */}
      <Footer />
    </div>
  );
}
