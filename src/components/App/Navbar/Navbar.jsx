import './Navbar.scss';
// import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';

export default function Navbar() {
    // const location = useLocation(); // Utilisez useLocation pour obtenir l'objet de location

    useEffect(() => {
        const handleScroll = () => {
            const accueilContainer = document.querySelector('.accueil__container');

            // Vérifiez si nous sommes sur la page d'accueil avant d'appliquer l'effet de défilement
            if (accueilContainer && window.scrollY > 0 && location.pathname === '/') {
                accueilContainer.classList.add('scrolled')
            } else if (accueilContainer) {
                accueilContainer.classList.remove('scrolled');
            }
        };
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    }, []); //[location.pathname] // Mettez à jour l'effet lorsque l'emplacement (pathname) change

    return (
        <div className='accueil__container'>
            <a className='accueil__logo' href=""><img  src="public\Logo\1dfd1fef-d2c2-49ee-9616-be4b313175c0.png" alt="Logo belle Nippe" /></a>
            
            <nav className='accueil__navbar'>
                <a className='accueil__link' href="">E-shop</a>
                <a className='accueil__link' href="">Editorial</a>
                <a className='accueil__link' href="">A Propos</a>
                <a className='accueil__link accueil__shop' href=""><img src="public\Icone\Shopping Bag.png" alt="" /></a>
            </nav>
        </div>
    )
}