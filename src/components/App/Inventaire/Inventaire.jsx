import './Inventaire.scss';

export default function Inventaire() {
  return (
    <div className="inventaire">
      <div className="inventaire__card">
        <div className="inventaire__imgContainer">
          <img className="inventaire__photo" src="/Vetements/vrd.png" alt="" />
        </div>
        <div className="inventaire__cardInfo">
          <h2 className="inventaire__cardTitle">Veste Wallow</h2>
          <p className="inventaire__cardDesc">
            Article upccling a partir de jean de de soie ainsi que tous les
            élements artistique de ma démarche créative pour confectionner une
            oeuvre. Entretien : laver à la main et ne pas mettre à la machine à
            laver.', collection: 'Candy
          </p>
          <p className="inventaire__cardStock">Stock : 1</p>
          <div className="inventaire__cardBtn">
            <button className="inventaire__btn">Modifier</button>
            <button className="inventaire__btn">Supprimer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
