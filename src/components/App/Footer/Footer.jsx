import './Footer.scss';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__logo'>
                <img src="/Logo/logo-cote-noir.png" alt="" />
            </div>
            <div className='mobile__container'>
                <div>
                    <ul>
                        <li className='footer__titleSection'>BELLE NIPPE</li>
                        <li><a className='footer__linkMobile' href="/apropos">A Propos</a></li>
                        <li><a className='footer__linkMobile' href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='footer__titleSection'>SERVICE CLIENT</li>
                        <li><a className='footer__linkMobile' href="conditionutilisation">Conditions d'utilisation</a></li>
                        <li><a className='footer__linkMobile' href="politiquedeconfidentialite">Politique de confidentialité</a></li>
                        <li><a className='footer__linkMobile' href="politiquederetour">Politique de retour</a></li>
                        <li><a className='footer__linkMobile' href="conditionsderetour">Conditions de retour</a></li>
                        <li><a className='footer__linkMobile' href="cgv">CGV</a></li>
                        <li><a className='footer__linkMobile' href="mentionslegales">Mentions légales</a></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li className='footer__titleSection'>RESEAUX SOCIAUX</li>
                        <li><a className='footer__linkMobile' target='blank' href="https://www.instagram.com/bellenippeshop/?igsh=MWowMTk4Y2t6bzc1bA%3D%3D">Instagram</a></li>
                        <li><a className='footer__linkMobile' target='blank' href="https://www.youtube.com/@bellenippestudio">YouTube</a></li>
                    </ul>
                </div>
            </div>
            
        </footer>
    )
}