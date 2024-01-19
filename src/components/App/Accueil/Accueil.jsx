import './Accueil.scss';

export default function Accueil() {
    return (
        <header className="accueil">
            <div className='accueil__contenu'>
                <div className='accueil__banner'>
                    <img className='accueil__logoBanner' src="public\Logo\cc5bb833-9823-4997-abd1-86fd85044f37.png" alt="" />
                    <p className='accueil__slogan'>Rendez-vous<span className='accueil__span'>bien nippé</span></p>
                </div>
            </div>
            <div className='accueil__btnContainer'>
                <button className='accueil__btn'>Découvrir</button>
            </div>
        </header>
    )
}