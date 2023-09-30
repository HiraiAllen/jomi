'use client'

import Image from 'next/image';
import general from '@/app/general.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
    // Configura las opciones del slider según tus preferencias
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function Services(){
    return(
        <div id="services" className={general.services}>
            <h2 className={general.servicesSubtitle}>¿Qué hacemos?</h2>
            <h2 className={general.servicesTitle}>Servicios</h2>

            <div className={general.servicesContainer}>
                <div className={general.serviceBox}>
                    <Image src="/assets/img/desarrollamos.png" 
                    alt="Descripción de la imagen" 
                    width={4} 
                    height={3}
                    layout="responsive"
                    className={general.serviceImg}/>

                    <h2 className={general.serviceTitle}>DESARROLLAMOS</h2>

                    <p className={general.serviceDescription}>
                        Construimos soluciones tech a la medida que se adaptan perfectamente a las necesidades
                        de cada empresa.
                    </p>
                </div>

                <div className={general.serviceBox}>
                    <Image src="/assets/img/innovamos.png" 
                    alt="Descripción de la imagen" 
                    width={4} 
                    height={3}
                    layout="responsive"
                    className={general.serviceImg}/>

                    <h2 className={general.serviceTitle}>INNOVAMOS</h2>

                    <p className={general.serviceDescription}>
                        Creamos propuestas de valor que revolucionan la forma en que las empresas operan y logran
                        resultados.
                    </p>
                </div>

                <div className={general.serviceBox}>
                    <Image src="/assets/img/aceleramos.png" 
                    alt="Descripción de la imagen" 
                    width={4} 
                    height={3}
                    layout="responsive"
                    className={general.serviceImg}/>

                    <h2 className={general.serviceTitle}>ACELERAMOS</h2>

                    <p className={general.serviceDescription}>
                        Ayudamos a las empresas a lograr resultados significativos, optimizando sus procesos y
                        mejorando su rendimiento.
                    </p>
                </div>
            </div>

            <div className={general.servicesSliderResponsive}>
                <Slider {...settings}>
                    <div>
                        <div className={general.serviceSlideItem}>
                            <div className={general.serviceBox}>
                                <Image src="/assets/img/desarrollamos.png" 
                                alt="Descripción de la imagen" 
                                width={4} 
                                height={3}
                                layout="responsive"
                                className={general.serviceImg}/>

                                <h2 className={general.serviceTitle}>DESARROLLAMOS</h2>

                                <p className={general.serviceDescription}>
                                    Construimos soluciones tech a la medida que se adaptan perfectamente a las necesidades
                                    de cada empresa.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={general.serviceSlideItem}>
                            <div className={general.serviceBox}>
                                <Image src="/assets/img/innovamos.png" 
                                alt="Descripción de la imagen" 
                                width={4} 
                                height={3}
                                layout="responsive"
                                className={general.serviceImg}/>

                                <h2 className={general.serviceTitle}>INNOVAMOS</h2>

                                <p className={general.serviceDescription}>
                                    Creamos propuestas de valor que revolucionan la forma en que las empresas operan y logran
                                    resultados.
                                </p>
                            </div>
                        </div>               
                    </div>
                </Slider>
            </div>

            <div className={general.servicesLinkBtnContainer}>
                <a href="" className={general.servicesLinkBtn}>CONOCE MÁS</a>
            </div>
        </div>
    );
}