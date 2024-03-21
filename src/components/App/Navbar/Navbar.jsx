import './Navbar.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(false);
  const [click, setClick] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  const role = localStorage.getItem('role');
  // const role = 'admin';

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    // Mettre à jour l'état en fonction de la localisation
    setIsHomePage(location.pathname === '/');
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const accueilContainer = document.querySelector('.accueil__container');

      if (accueilContainer && window.innerWidth > 769) {
        if (window.scrollY > 0 && isHomePage) {
          accueilContainer.classList.add('scrolled');
        } else {
          accueilContainer.classList.remove('scrolled');
        }

        if (location.pathname !== '/') {
          accueilContainer.classList.add('otherpage');
        } else {
          accueilContainer.classList.remove('otherpage');
        }
      }
    };

    // Attacher l'écouteur d'événements scroll uniquement lorsque je suis sur la page d'accueil
    if (isHomePage) {
      document.addEventListener('scroll', handleScroll);
    }

    return () => {
      // Retirer l'écouteur d'événements scroll lorsque je quitte la page d'accueil
      document.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname, isHomePage]);

  // const isLogged = localStorage.getItem('is_logged') === 'true';
  const cookies = document.cookie.split('; ');
  const isLoggedCookie = cookies.find((cookie) =>
    cookie.startsWith('is_logged=')
  );
  const isLogged = isLoggedCookie
    ? isLoggedCookie.split('=')[1] === 'true'
    : false;
  // const tokenCookie = cookies.find((cookie) => cookie.startsWith('token='));
  // const token = tokenCookie ? tokenCookie.split('=')[1] : null;

  return (
    <header className={`accueil__container ${isHomePage ? '' : 'otherpage'}`}>
      <NavLink className="accueil__logo" to="/">
        <img
          src="/Logo/1dfd1fef-d2c2-49ee-9616-be4b313175c0.png"
          alt="Logo belle Nippe"
        />
      </NavLink>
      <div className="navbar__container">
        <div
          className="mobile__navbar"
          role="button"
          tabIndex={0}
          onClick={handleClick}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleClick();
            }
          }}
          aria-label="Mobile Navigation"
        >
          <i id="bar" className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <nav className={click ? 'accueil__navbar open' : 'accueil__navbar'}>
          <NavLink
            className="accueil__link"
            to="/shop"
            onClick={closeMobileMenu}
          >
            Shop
          </NavLink>
          <NavLink
            className="accueil__link"
            to="/editorial"
            onClick={closeMobileMenu}
          >
            Editorial
          </NavLink>
          <NavLink
            className="accueil__link"
            to="/apropos"
            onClick={closeMobileMenu}
          >
            A Propos
          </NavLink>

          {role === 'admin' && (
            <NavLink
              className="accueil__link"
              to="/admin"
              onClick={closeMobileMenu}
            >
              Admin
            </NavLink>
          )}

          <NavLink
            className="accueil__shop"
            to="/monpanier"
            onClick={closeMobileMenu}
          >
            <i className="fa-solid fa-bag-shopping" />
          </NavLink>
          <NavLink
            className="accueil__shop"
            // to={isLogged && token ? '/profil' : '/connexion'}
            to={isLogged ? '/profil' : '/connexion'}
            onClick={closeMobileMenu}
          >
            <i className="fa-solid fa fa-user" />
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

// useEffect(() => {
//     const handleScroll = () => {
//         const accueilContainer = document.querySelector('.accueil__container');

//         // Vérifiez si nous sommes sur la page d'accueil avant d'appliquer l'effet de défilement
//         if (accueilContainer && window.scrollY > 0 && location.pathname === '/') {
//             accueilContainer.classList.add('scrolled')
//         } else if (accueilContainer) {
//             accueilContainer.classList.remove('scrolled');
//         } else {
//             accueilContainer.classList.remove('otherpage');
//         }

//         if (location.pathname !== '/') {
//             accueilContainer.classList.add('otherpage');
//         } else {
//             accueilContainer.classList.remove('otherpage');
//         }
//     };
//     document.addEventListener('scroll', handleScroll);
//     return () => {
//         document.removeEventListener('scroll', handleScroll);
//     }
// }, [location.pathname]); //[location.pathname] // Mettez à jour l'effet lorsque l'emplacement (pathname) change
