'use client'

import general from '@/app/general.module.css';
import Image from 'next/image';
import React, { useState } from 'react';

export default function Header({ changeLanguage, translations }){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const width = 150; // Ancho deseado
    const originalAspectRatio = 4 / 3; // Cambia esto según la relación de aspecto de tu imagen
    const height = width / originalAspectRatio; // Calcula la altura en función del ancho

    const handleLanguageChange = (newLanguage) => {
      // Llama a la función para cambiar el idioma con el nuevo idioma como argumento
      changeLanguage(newLanguage);
    };

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (  
        <header className={general.header}>
          <div className="logo-container">
            <a href="/" className="logo-link">
              <Image src="/assets/img/JOMI PNG.png" 
              alt="Descripción de la imagen" 
              width={width} 
              height={height}
              layout="responsive"
              className={general.logoImg}/>
            </a>
          </div>
          <nav className={general.menu}>
            <ul className={general.menuList}>
              <li className={general.menuItem}><a href="#">{translations.menu.itemOne}</a></li>
              <li className={general.menuItem}><a href="#">{translations.menu.itemTwo}</a></li>
              <li className={general.menuItem}><a href="#">{translations.menu.itemThree}</a></li>
              <li className={general.menuItem}><a href="#">{translations.menu.itemFour}</a></li>
            </ul>
          </nav>
          <div className={general.contactAndLanguageButtons}>
            <a href="/contacto" className={general.contactLink}>{translations.menu.contactBtn}</a>

            <button className="language-button"
            onClick={() => handleLanguageChange('en')}>EN</button>

            <button className="language-button"
            onClick={() => handleLanguageChange('es')}>ES</button>
          </div>

          <div className={general.responsiveBtnContainer}>
            <button className={general.responsiveBtnAction} onClick={toggleMenu}>
              <Image src="/assets/img/hamburger-icon.png" 
              alt="Descripción de la imagen" 
              width={width} 
              height={height}
              layout="responsive"
              className={general.responsiveBtn}/>
            </button>
          </div>

          {isMenuOpen && (
            <div className={general.responsiveMenu}>
              <button
                className={general.closeButton}
                onClick={toggleMenu} // Cierra el menú al hacer clic en el botón de cerrar
              >
                x
              </button>
              <ul>
                {/* Agrega tus elementos de menú aquí */}
                <li className={general.menuItem}><a href="#">{translations.menu.itemOne}</a></li>
                <li className={general.menuItem}><a href="#">{translations.menu.itemTwo}</a></li>
                <li className={general.menuItem}><a href="#">{translations.menu.itemThree}</a></li>
                <li className={general.menuItem}><a href="#">{translations.menu.itemFour}</a></li>
                {/* ... */}
              </ul>
            </div>
          )}
        </header>
    );
}