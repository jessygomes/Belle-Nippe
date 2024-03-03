import './AdminCollection.scss';

export default function AdminCollection({
  collection,
  setShowModalSupp,
  setShowModalUpdate,
}) {
  return (
    <div className="collectionAdmin">
      <div className="collectionAdmin__card">
        <div className="collectionAdmin__cardInfo">
          <div>
            <h2 className="collectionAdmin__cardTitle">
              Collection {collection.titleCollection}
            </h2>
            <p className="collectionAdmin__addressCllient">
              {collection.descriptionCollection}
            </p>
            <p className="collectionAdmin__addressCllient">{collection.id}</p>
          </div>
          <div className="collectionAdmin__cardBtn">
            <button
              className="collectionAdmin__btn"
              type="button"
              onClick={setShowModalUpdate}
            >
              Modifier
            </button>
            <button
              className="collectionAdmin__btn"
              type="button"
              onClick={setShowModalSupp}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
