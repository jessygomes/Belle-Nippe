import './Footer.scss';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__logo'>
                <img src="public\Logo\logo-cote-noir.png" alt="" />
            </div>
            <div>
                <ul>
                    <li className='footer__titleSection'>BELLE NIPPE</li>
                    <li><a href="">A Propos</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='footer__titleSection'>SERVICE CLIENT</li>
                    <li><a href="">Conditions d'utilisation</a></li>
                    <li><a href="">Politique de confidentialité</a></li>
                    <li><a href="">Politique de retour</a></li>
                    <li><a href="">Conditions de retour</a></li>
                    <li><a href="">CGV</a></li>
                    <li><a href="">Mentions légales</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='footer__titleSection'>RESEAUX SOCIAUX</li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">YouTube</a></li>
                </ul>
            </div>
        </footer>
    )
}