import general from '@/app/general.module.css';
import Image from 'next/image';

export default function Header(){
    const width = 150; // Ancho deseado
    const originalAspectRatio = 4 / 3; // Cambia esto según la relación de aspecto de tu imagen
    const height = width / originalAspectRatio; // Calcula la altura en función del ancho

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
              <li className={general.menuItem}><a href="#">¿Quiénes somos?</a></li>
              <li className={general.menuItem}><a href="#">¿Qué hacemos?</a></li>
              <li className={general.menuItem}><a href="#">¿Cómo lo hacemos?</a></li>
              <li className={general.menuItem}><a href="#">Casos de éxito</a></li>
            </ul>
          </nav>
          <div className={general.contactAndLanguageButtons}>
            <a href="/contacto" className={general.contactLink}>Contacto</a>
            <button className="language-button">ES</button>
          </div>
        </header>
    );
}