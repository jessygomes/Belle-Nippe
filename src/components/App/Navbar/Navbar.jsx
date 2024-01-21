import './Navbar.scss';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

export default function Navbar() {
    const location = useLocation();
    const [isHomePage, setIsHomePage] = useState(false);

    useEffect(() => {
        // Mettez à jour l'état en fonction de la localisation
        setIsHomePage(location.pathname === '/');
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            const accueilContainer = document.querySelector('.accueil__container');

            if (accueilContainer) {
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

        // Attachez l'écouteur d'événements scroll uniquement lorsque vous êtes sur la page d'accueil
        if (isHomePage) {
            document.addEventListener('scroll', handleScroll);
        }

        return () => {
            // Retirez l'écouteur d'événements scroll lorsque vous quittez la page d'accueil
            document.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname, isHomePage]);

    return (
        <div className={`accueil__container ${isHomePage ? '' : 'otherpage'}`}>
            <a className='accueil__logo' href="/"><img  src="/Logo/1dfd1fef-d2c2-49ee-9616-be4b313175c0.png" alt="Logo belle Nippe" /></a>
            
            <nav className='accueil__navbar'>
                <a  className='accueil__link' href="/shop">E-shop</a>
                <a  className='accueil__link' href="/editorial">Editorial</a>
                <a  className='accueil__link' href="/apropos">A Propos</a>
                <a  className='accueil__link accueil__shop' href="/monpanier"><img src="/Icone/Shopping Bag.png" alt="" /></a>
            </nav>
        </div>
    )
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