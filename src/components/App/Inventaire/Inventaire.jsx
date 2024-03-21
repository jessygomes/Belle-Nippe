import './Inventaire.scss';

export default function Inventaire({
  item,
  setShowModalSupp,
  setShowModalUpdate,
}) {
  return (
    <div className="inventaire">
      <div className="inventaire__card">
        <div className="inventaire__imgContainer">
          <img className="inventaire__photo" src="/Vetements/vrd.png" alt="" />
        </div>
        <div className="inventaire__cardInfo">
          <h2 className="inventaire__cardTitle">{item.title}</h2>
          <p className="inventaire__cardDesc">
            Description : {item.description}
          </p>
          <p className="inventaire__cardStock">Stock : {item.stock}</p>
          <p className="inventaire__cardStock">Prix : {item.price} €</p>
          <p className="inventaire__cardStock">
            Catégorie : {item.category_id}
          </p>
          <p className="inventaire__cardStock">
            Collection : {item.collection_id}
          </p>
          <div className="inventaire__cardBtn">
            <button
              className="inventaire__btn"
              type="button"
              onClick={setShowModalUpdate}
            >
              Modifier
            </button>
            <button
              className="inventaire__btn"
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
