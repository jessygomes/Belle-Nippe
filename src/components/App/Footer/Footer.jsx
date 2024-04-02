import { Link } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer__logo">
          <img src="/Logo/logo-cote-noir.png" alt="" />
        </div>
        <div className="mobile__container">
          <div>
            <ul>
              <li className="footer__titleSection">BELLE NIPPE</li>
              <li>
                <Link className="footer__linkMobile" to="/shop">
                  Shop
                </Link>
              </li>
              <li>
                <Link className="footer__linkMobile" to="/editorial">
                  Editorial
                </Link>
              </li>
              <li>
                <Link className="footer__linkMobile" to="/apropos">
                  A Propos
                </Link>
              </li>
              <li>
                <Link className="footer__linkMobile" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="footer__titleSection">SERVICE CLIENT</li>
              <li>
                <Link className="footer__linkMobile" to="/conditionutilisation">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link
                  className="footer__linkMobile"
                  to="/politiquedeconfidentialite"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link className="footer__linkMobile" to="/politiquederetour">
                  Politique de retour
                </Link>
              </li>
              <li>
                <Link className="footer__linkMobile" to="/conditionsderetour">
                  Conditions de retour
                </Link>
              </li>
              <li>
                <Link className="footer__linkMobile" to="/cgv">
                  CGV
                </Link>
              </li>
              <li>
                <Link className="footer__linkMobile" to="/mentionslegales">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="footer__titleSection">RESEAUX SOCIAUX</li>
              <li>
                <a
                  className="footer__linkMobile"
                  target="blank"
                  href="https://www.instagram.com/bellenippeshop/?igsh=MWowMTk4Y2t6bzc1bA%3D%3D"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="footer__linkMobile"
                  target="blank"
                  href="https://www.youtube.com/@bellenippestudio"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="footer__rights">
        <p className="footer__copyRight">
          © 2024 Belle Nippe. Tous droits réservés | Website by :{' '}
          <Link target="_blank" to="https://inthegleam.com/">
            inTheGleam
          </Link>
        </p>
      </div>
    </div>
  );
}
