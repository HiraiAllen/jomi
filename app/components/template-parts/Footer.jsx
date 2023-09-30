import general from '@/app/general.module.css';
import Image from 'next/image';

export default function Footer(){
    return(
        <footer id="footer" className={general.footer}>
            <div className={general.footerContent}>
                <div className={general.logoFooter}>
                    <Image src="/assets/img/Jomi negativo.png" 
                    alt="Descripción de la imagen" 
                    width={4} 
                    height={3}
                    layout="responsive"
                    className={general.logoFooterImg}/>
                </div>

                <div className={general.copyrightFooter}>
                    &copy; Copyright 2023 por <br></br>
                    Todos los derechos reservados.
                </div>

                <div className={general.contactFooter}>
                    <h3 className={general.contactFooterTitle}>CONTÁCTANOS</h3>

                    <div className={general.contactFooterItem}>
                        <span>(+57) 300 645 5511</span>
                    </div>

                    <div className={general.contactFooterItem}>
                        <span>jomicolombia@outlook.com</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}