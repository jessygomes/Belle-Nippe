import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AdminCollection from '../../AdminCollection/AdminCollection';
import Inventaire from '../../Inventaire/Inventaire';
import Commande from '../../Commande/Commande';
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
  const { title, description } = useSelector((state) => state.collection);

  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [selectedCollectionId, setSelectedCollectionId] = useState('');

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
    setShowModalModifCollection(true);
  };
  const closeModalModifCollection = () => {
    setSelectedCollectionId('');
    setShowModalModifCollection(false);
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
            <NavLink className="admin__link" to="/Collection">
              Collection
            </NavLink>
            <NavLink className="admin__link" to="/shop">
              Inventaire
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
        <button className="admin__actionBtn" type="button">
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
              {collection.title}
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
              <Inventaire key={item.id} item={item} />
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
                name="title"
                onChange={changeFieldCollection}
                value={title}
              />
              <input
                className="modal__inputDesc"
                type="text"
                placeholder="Description"
                name="description"
                onChange={changeFieldCollection}
                value={description}
              />
              <label htmlFor="isActive">Actif</label>
              <input
                className="modal__inputDesc"
                type="checkbox"
                name="active"
                onChange={changeFieldCollection}
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
              <input
                className="modal__inputDesc"
                type="text"
                placeholder="Titre de la collection"
                name="title"
                onChange={changeFieldCollection}
                value={title}
              />
              <input
                className="modal__inputDesc"
                type="text"
                placeholder="Description"
                name="description"
                onChange={changeFieldCollection}
                value={description}
              />
              <label htmlFor="isActive">Actif</label>
              <input
                className="modal__inputDesc"
                type="checkbox"
                name="active"
                onChange={changeFieldCollection}
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
      <Footer />
    </div>
  );
}
