import './Footer.scss';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__logo'>
                <img src="/Logo/logo-cote-noir.png" alt="" />
            </div>
            <div>
                <ul>
                    <li className='footer__titleSection'>BELLE NIPPE</li>
                    <li><a href="/apropos">A Propos</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='footer__titleSection'>SERVICE CLIENT</li>
                    <li><a href="conditionutilisation">Conditions d'utilisation</a></li>
                    <li><a href="politiquedeconfidentialite">Politique de confidentialité</a></li>
                    <li><a href="politiquederetour">Politique de retour</a></li>
                    <li><a href="conditionsderetour">Conditions de retour</a></li>
                    <li><a href="cgv">CGV</a></li>
                    <li><a href="mentionslegales">Mentions légales</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className='footer__titleSection'>RESEAUX SOCIAUX</li>
                    <li><a target='blank' href="https://www.instagram.com/bellenippeshop/?igsh=MWowMTk4Y2t6bzc1bA%3D%3D">Instagram</a></li>
                    <li><a target='blank' href="https://www.youtube.com/@bellenippestudio">YouTube</a></li>
                </ul>
            </div>
        </footer>
    )
}