import './Commande.scss';

export default function Commande() {
  return (
    <div className="commande">
      <div className="commande__card">
        <div className="commande__imgContainer">
          <img className="commande__photo" src="/Vetements/vrd.png" alt="" />
        </div>
        <div className="commande__cardInfo">
          <h2 className="commande__cardTitle">Veste Wallow</h2>
          <p className="commande__addressCllient">
            23 rue de la Boulangère, 78000 VERSAILLES
          </p>
          <p className="commande__cardStock">Stock : 1</p>
          <div className="commande__cardBtn">
            <button className="commande__btn">Modifier</button>
            <button className="commande__btn">Supprimer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
