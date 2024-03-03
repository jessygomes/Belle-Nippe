import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AdminCollection from '../../AdminCollection/AdminCollection';
import Inventaire from '../../Inventaire/Inventaire';
// import Commande from '../../Commande/Commande';
import Footer from '../../Footer/Footer';
import { changeFieldValue as changeFieldValueCollection } from '../../../../store/collectionSlice';
import { changeFieldValue as changeFieldValueItem } from '../../../../store/shopSlice';
import './Admin.scss';

export default function Admin() {
  const dispatch = useDispatch();

  useEffect(() => {
    const action = { type: 'GET_ITEMS_FROM_API' };
    dispatch(action);
    const action2 = { type: 'GET_COLLECTIONS_FROM_API' };
    dispatch(action2);
    const action3 = { type: 'GET_CATEGORY_FROM_API' };
    dispatch(action3);
  }, [dispatch]);

  //! RECUPERATION DES DONNEES DU STATE
  const collections = useSelector((state) => state.collection.listCollections);
  const categories = useSelector((state) => state.category.listCategories);
  const { titleCollection, descriptionCollection } = useSelector(
    (state) => state.collection
  );
  const {
    title,
    slug,
    images,
    price,
    stock,
    size,
    description,
    collection_id,
    category_ids,
    isActive,
  } = useSelector((state) => state.shop);

  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [selectedCollectionId, setSelectedCollectionId] = useState('');
  const [selectedItemId, setSelectedItemId] = useState('');

  const collectionId = selectedCollectionId;
  const collectionModify = useSelector((state) =>
    state.collection.listCollections.find(
      (collection) => collection.id === collectionId
    )
  );

  const itemId = selectedItemId;
  const itemModify = useSelector((state) =>
    state.shop.listItems.find((item) => item.id === itemId)
  );

  //! GESTION DES MODALS : COLLECTION
  const [showModalCollection, setShowModalCollection] = useState(false);
  const [showModalSuppCollection, setShowModalSuppCollection] = useState(false);
  const [showModalModifCollection, setShowModalModifCollection] =
    useState(false);

  const openModal = () => {
    setShowModalCollection(true);
  };
  const closeModal = () => {
    setShowModalCollection(false);
  };
  const openModalSuppCollection = (id) => {
    setSelectedCollectionId(id);
    setShowModalSuppCollection(true);
  };
  const closeModalSuppCollection = () => {
    setSelectedCollectionId('');
    setShowModalSuppCollection(false);
  };
  const openModalModifCollection = (id) => {
    setSelectedCollectionId(id);
    if (collectionModify) {
      dispatch(
        changeFieldValueCollection({
          inputName: 'titleCollection',
          inputValue: collectionModify.titleCollection,
        })
      );
      dispatch(
        changeFieldValueCollection({
          inputName: 'descriptionCollection',
          inputValue: collectionModify.descriptionCollection,
        })
      );
      setShowModalModifCollection(true);
    }
  };
  const closeModalModifCollection = () => {
    setSelectedCollectionId('');
    setShowModalModifCollection(false);
  };
  //! GESTION MODAL : ITEMS
  const [showModalItem, setShowModalItem] = useState(false);
  const [showModalSuppItem, setShowModalSuppItem] = useState(false);
  const [showModalModifItem, setShowModalModifItem] = useState(false);
  const openModalItem = () => {
    setShowModalItem(true);
  };
  const closeModalItem = () => {
    setShowModalItem(false);
  };
  const openModalSuppItem = (id) => {
    setSelectedItemId(id);
    setShowModalSuppItem(true);
  };
  const closeModalSuppItem = () => {
    setSelectedItemId('');
    setShowModalSuppItem(false);
  };
  const openModalModifItem = (id) => {
    setSelectedItemId(id);
    if (itemModify) {
      dispatch(
        changeFieldValueItem({
          inputName: 'title',
          inputValue: itemModify.title,
        })
      );
      dispatch(
        changeFieldValueItem({ inputName: 'slug', inputValue: itemModify.slug })
      );
      dispatch(
        changeFieldValueItem({
          inputName: 'price',
          inputValue: itemModify.price,
        })
      );
      dispatch(
        changeFieldValueItem({
          inputName: 'stock',
          inputValue: itemModify.stock,
        })
      );
      dispatch(
        changeFieldValueItem({ inputName: 'size', inputValue: itemModify.size })
      );
      dispatch(
        changeFieldValueItem({
          inputName: 'description',
          inputValue: itemModify.description,
        })
      );
      dispatch(
        changeFieldValueItem({
          inputName: 'collection_id',
          inputValue: itemModify.collection_id,
        })
      );
      dispatch(
        changeFieldValueItem({
          inputName: 'category_ids',
          inputValue: itemModify.category_ids,
        })
      );
      setShowModalModifItem(true);
    }
  };
  const closeModalModifItem = () => {
    setSelectedItemId('');
    setShowModalModifItem(false);
  };

  //! INPUT CREER OU MODIFIER UNE COLLECTION
  function changeFieldCollection(evt) {
    const { name, value } = evt.target;
    const action = changeFieldValueCollection({
      inputName: name,
      inputValue: value,
    });
    dispatch(action);
  }
  function changeFieldItem(evt) {
    const { name, value } = evt.target;
    const action = changeFieldValueItem({ inputName: name, inputValue: value });
    dispatch(action);
  }
  //! CREER UNE COLLECTION
  function handleCreateCollection() {
    const action = { type: 'CREATE_COLLECTION' };
    dispatch(action);
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    closeModal();
    handleCreateCollection();
  };
  //! MODIFIER UNE COLLECTION
  function handleUpdateCollection() {
    const action = { type: 'UPDATE_COLLECTION', payload: selectedCollectionId };
    dispatch(action);
  }

  const handleSubmitModif = (evt) => {
    evt.preventDefault();
    closeModalModifCollection();
    handleUpdateCollection();
  };
  //! SUPPRIMER UNE COLLECTION
  function deleteCollection() {
    const action = {
      type: 'DELETE_COLLECTION',
      payload: selectedCollectionId,
    };
    dispatch(action);
  }
  const handleSubmitSupp = (evt) => {
    evt.preventDefault();
    closeModalSuppCollection();
    deleteCollection();
  };

  //! CREER UN PRODUIT
  function handleCreateItem() {
    const action = { type: 'CREATE_ITEM' };
    dispatch(action);
  }
  const handleSubmitItem = (evt) => {
    evt.preventDefault();
    closeModalItem();
    handleCreateItem();
  };

  //! MODIFIER UN PRODUIT
  function handleUpdateItem() {
    const action = { type: 'UPDATE_ITEM', payload: selectedItemId };
    dispatch(action);
  }

  const handleSubmitModifItem = (evt) => {
    evt.preventDefault();
    closeModalModifItem();
    handleUpdateItem();
  };

  //! SUPPRIMER UN PRODUIT
  function deleteItem() {
    const action = {
      type: 'DELETE_ITEM',
      payload: selectedItemId,
    };
    dispatch(action);
  }
  const handleSubmitSuppItem = (evt) => {
    evt.preventDefault();
    closeModalSuppItem();
    deleteItem();
  };

  //! CHANGER LES CATEGORIES ET COLLECTIONS
  const handleCategoryChange = (event) => {
    setSelectedCategoryId(event.target.value);
    console.log('selectedcategoryID', selectedCategoryId);
  };
  const handleCollectionChange = (event) => {
    setSelectedCollectionId(event.target.value);
  };

  const items = useSelector((state) => state.shop.listItems).filter(
    (item) =>
      (selectedCategoryId === '' ||
        item.category_ids === Number(selectedCategoryId)) &&
      (selectedCollectionId === '' ||
        item.collection_id === Number(selectedCollectionId))
  );

  return (
    <div className="admin">
      <div className="admin__navbar">
        <NavLink className="accueil__logo" to="/">
          <img
            src="/Logo/1dfd1fef-d2c2-49ee-9616-be4b313175c0.png"
            alt="Logo belle Nippe"
          />
        </NavLink>
        <div className="admin__navbarcontainer">
          <nav className="admin__navbarLinks">
            <NavLink className="admin__link" to="/shop">
              Shop
            </NavLink>
            <NavLink className="admin__link" to="/editorial">
              Editorial
            </NavLink>
            <NavLink className="admin__link" to="/editorial">
              Commandes
            </NavLink>
          </nav>
        </div>
      </div>

      <div className="admin__actions">
        <button className="admin__actionBtn" type="button" onClick={openModal}>
          Créer une nouvelle collection
        </button>
        <button
          className="admin__actionBtn"
          type="button"
          onClick={openModalItem}
        >
          Ajouter un nouveau produit
        </button>
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
              {collection.titleCollection}
            </option>
          ))}
        </select>
      </div>

      <div className="admin__onglet">
        <div className="admin__collectionList">
          <h2 className="admin__title">Mes Collections</h2>
          {collections.map((collection) => (
            <div key={collection.id} className="admin__collectionCard">
              <AdminCollection
                collection={collection}
                setShowModalSupp={() => openModalSuppCollection(collection.id)}
                setShowModalUpdate={() =>
                  openModalModifCollection(collection.id)
                }
              />
            </div>
          ))}
        </div>
        <div className="admin__inventaire">
          <h2 className="admin__title">Inventaire</h2>
          <div className="admin__inventaireList">
            {items.map((item) => (
              <Inventaire
                key={item.id}
                item={item}
                setShowModalSupp={() => openModalSuppItem(item.id)}
                setShowModalUpdate={() => openModalModifItem(item.id)}
              />
            ))}
          </div>
        </div>
        {/* <div className="admin__inventaire">
          <h2 className="admin__title">Commandes</h2>
          <div className="admin__inventaireList">
            <Commande />
          </div>
        </div> */}
      </div>

      {showModalCollection && (
        <div className="modal">
          <div className="modal__content">
            <button className="modal__close" type="button">
              <i className="fa fa-close" onClick={closeModal} />
            </button>
            <h2 className="modal__title">Nouvelle Collection</h2>
            <form className="modal__form" onSubmit={handleSubmit}>
              <input
                className="modal__inputDesc"
                type="text"
                placeholder="Titre de la collection"
                name="titleCollection"
                onChange={changeFieldCollection}
                value={titleCollection}
              />
              <textarea
                className="modal__inputDesc"
                type="text"
                placeholder="Description"
                name="descriptionCollection"
                onChange={changeFieldCollection}
                value={descriptionCollection}
              />
              <label htmlFor="isActive">Actif</label>
              <input
                className="modal__inputDesc"
                type="checkbox"
                name="isActive"
                onChange={(event) =>
                  changeFieldCollection({
                    target: { name: 'isActive', value: event.target.checked },
                  })
                }
              />
              <button className="modal__btn" type="submit">
                Créer ma nouvelle collection
              </button>
            </form>
          </div>
        </div>
      )}

      {showModalModifCollection && (
        <div className="modal">
          <div className="modal__content">
            <button className="modal__close" type="button">
              <i className="fa fa-close" onClick={closeModalModifCollection} />
            </button>
            <h2 className="modal__title">Modifier la Collection</h2>
            <form className="modal__form" onSubmit={handleSubmitModif}>
              <label htmlFor="titleCollection">Nom de la collection</label>
              <input
                className="modal__inputDesc"
                type="text"
                placeholder="Titre de la collection"
                name="titleCollection"
                onChange={changeFieldCollection}
                value={titleCollection}
              />
              <label htmlFor="descriptionCollection">Description</label>
              <textarea
                className="modal__inputDesc"
                type="text"
                placeholder="Description"
                name="descriptionCollection"
                onChange={changeFieldCollection}
                value={descriptionCollection}
              />
              <label htmlFor="isActive">Actif</label>
              <input
                className="modal__inputDesc"
                type="checkbox"
                name="isActive"
                checked={isActive}
                onChange={(event) =>
                  changeFieldCollection({
                    target: { name: 'isActive', value: event.target.checked },
                  })
                }
              />
              <button className="modal__btn" type="submit">
                Modifier la collection
              </button>
            </form>
          </div>
        </div>
      )}

      {showModalSuppCollection && (
        <div className="modal">
          <div className="modal__content">
            <button className="modal__close" type="button">
              <i className="fa fa-close" onClick={closeModalSuppCollection} />
            </button>
            <h2 className="modal__title">Supprimer la collection</h2>
            <button
              className="modal__btnAnnuler"
              type="button"
              onClick={closeModalSuppCollection}
            >
              Annuler
            </button>
            <form className="modal__form" onSubmit={handleSubmitSupp}>
              <button className="modal__btnSupp" type="submit">
                Supprimer la collection
              </button>
            </form>
          </div>
        </div>
      )}

      {showModalItem && (
        <div className="modal">
          <div className="modal__content">
            <button className="modal__close" type="button">
              <i className="fa fa-close" onClick={closeModalItem} />
            </button>
            <h2 className="modal__title">Nouveau Produit</h2>
            <form className="modal__form" onSubmit={handleSubmitItem}>
              <input
                className="modal__inputDesc"
                type="text"
                placeholder="Titre du produit"
                name="title"
                onChange={changeFieldItem}
                value={title}
              />
              <input
                className="modal__inputDesc"
                type="text"
                placeholder="Slug"
                name="slug"
                onChange={changeFieldItem}
                value={slug}
              />
              <input
                className="modal__inputDesc"
                type="number"
                placeholder="Prix"
                name="price"
                onChange={changeFieldItem}
                value={price}
              />
              <input
                className="modal__inputDesc"
                type="number"
                placeholder="Stock"
                name="stock"
                onChange={changeFieldItem}
                value={stock}
              />
              <input
                className="modal__inputDesc"
                type="text"
                placeholder="Taille"
                name="size"
                onChange={changeFieldItem}
                value={size}
              />
              <textarea
                className="modal__inputDesc"
                type="text"
                placeholder="Description"
                name="description"
                onChange={changeFieldItem}
                value={description}
              />
              <select
                className=""
                name="collection_id"
                value={collection_id}
                onChange={changeFieldItem}
              >
                <option value="">Toutes les collections</option>
                {collections.map((collection) => (
                  <option key={collection.id} value={collection.id}>
                    {collection.titleCollection}
                  </option>
                ))}
              </select>
              <select
                className=""
                name="category_ids"
                onChange={changeFieldItem}
                value={category_ids}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              {/* <input
                className="modal__inputDesc"
                type="file"
                name="images"
                value={images}
                onChange={changeFieldItem}
              /> */}
              <label htmlFor="isActive">Actif</label>
              <input
                className="modal__inputDesc"
                type="checkbox"
                name="isActive"
                checked={isActive}
                onChange={(event) =>
                  changeFieldItem({
                    target: { name: 'isActive', value: event.target.checked },
                  })
                }
              />
              <button className="modal__btn" type="submit">
                Créer mon nouveau produit
              </button>
            </form>
          </div>
        </div>
      )}

      {showModalModifItem && (
        <div className="modal">
          <div className="modal__content">
            <button className="modal__close" type="button">
              <i className="fa fa-close" onClick={closeModalModifItem} />
            </button>
            <h2 className="modal__title">Modifier un produit</h2>
            <form className="modal__form" onSubmit={handleSubmitModifItem}>
              <label htmlFor="title">Nom du produit</label>
              <input
                className="modal__inputDesc"
                type="text"
                placeholder="Titre du produit"
                name="title"
                onChange={changeFieldItem}
                value={title}
              />
              <label htmlFor="slug">Slug (nom URL)</label>
              <input
                className="modal__inputDesc"
                type="text"
                placeholder="Slug"
                name="slug"
                onChange={changeFieldItem}
                value={slug}
              />
              <label htmlFor="price">Prix</label>
              <input
                className="modal__inputDesc"
                type="number"
                placeholder="Prix"
                name="price"
                onChange={changeFieldItem}
                value={price}
              />
              <label htmlFor="stock">Stock</label>
              <input
                className="modal__inputDesc"
                type="number"
                placeholder="Stock"
                name="stock"
                onChange={changeFieldItem}
                value={stock}
              />
              <label htmlFor="size">Taille</label>
              <input
                className="modal__inputDesc"
                type="text"
                placeholder="Taille"
                name="size"
                onChange={changeFieldItem}
                value={size}
              />
              <label htmlFor="description">Description</label>
              <textarea
                className="modal__inputDesc"
                type="text"
                placeholder="Description"
                name="description"
                onChange={changeFieldItem}
                value={description}
              />
              <label htmlFor="collection_id">Collection</label>
              <select
                className=""
                name="collection_id"
                value={collection_id}
                onChange={changeFieldItem}
              >
                <option value="">Toutes les collections</option>
                {collections.map((collection) => (
                  <option key={collection.id} value={collection.id}>
                    {collection.titleCollection}
                  </option>
                ))}
              </select>
              <label htmlFor="category_ids">Catégorie</label>
              <select
                className=""
                name="category_ids"
                onChange={changeFieldItem}
                value={category_ids}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              {/* <input
                className="modal__inputDesc"
                type="file"
                name="images"
                value={images}
                onChange={changeFieldItem}
              /> */}
              <label htmlFor="isActive">Actif</label>
              <input
                className="modal__inputDesc"
                type="checkbox"
                name="isActive"
                checked={isActive}
                onChange={(event) =>
                  changeFieldItem({
                    target: { name: 'isActive', value: event.target.checked },
                  })
                }
              />
              <button className="modal__btn" type="submit">
                Modifier mon produit
              </button>
            </form>
          </div>
        </div>
      )}

      {showModalSuppItem && (
        <div className="modal">
          <div className="modal__content">
            <button className="modal__close" type="button">
              <i className="fa fa-close" onClick={closeModalSuppItem} />
            </button>
            <h2 className="modal__title">Supprimer le produit</h2>
            <button
              className="modal__btnAnnuler"
              type="button"
              onClick={closeModalSuppItem}
            >
              Annuler
            </button>
            <form className="modal__form" onSubmit={handleSubmitSuppItem}>
              <button className="modal__btnSupp" type="submit">
                Supprimer le produit
              </button>
            </form>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
