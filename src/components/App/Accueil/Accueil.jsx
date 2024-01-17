import './Accueil.scss';

export default function Accueil() {
    return (
        <header className="accueil">
            <div className='accueil__container'>
                <a className='accueil__logo' href=""><img  src="public\Logo\1dfd1fef-d2c2-49ee-9616-be4b313175c0.png" alt="Logo belle Nippe" /></a>
                
                <nav className='accueil__navbar'>
                    <a className='accueil__link' href="">E-shop</a>
                    <a className='accueil__link' href="">Editorial</a>
                    <a className='accueil__link' href="">A Propos</a>
                    <a className='accueil__link accueil__shop' href=""><img src="public\Icone\Shopping Bag.png" alt="" /></a>
                </nav>
            </div>

            <div className='accueil__contenu'>
                <p className='accueil__slogan'>Rendez-vous bien nippé</p>
                <button className='accueil__btn'>Découvrir</button>
            </div>
        </header>
    )
}