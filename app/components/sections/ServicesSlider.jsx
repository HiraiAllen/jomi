'use client'
import Image from 'next/image';
import general from '@/app/general.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function ServicesSlider({ changeLanguage, translations }){
    const handleLanguageChange = (newLanguage) => {
        // Llama a la función para cambiar el idioma con el nuevo idioma como argumento
        changeLanguage(newLanguage);
    };

    const settings = {
        // Configura las opciones del slider según tus preferencias
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return(
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

                                <h2 className={general.serviceTitle}>{translations.services.serviceOne.serviceTitle}</h2>

                                <p className={general.serviceDescription}>
                                    {translations.services.serviceOne.serviceDescription}
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

                            <h2 className={general.serviceTitle}>{translations.services.serviceTwo.serviceTitle}</h2>

                            <p className={general.serviceDescription}>
                                {translations.services.serviceTwo.serviceDescription}
                            </p>
                        </div>     
                    </div>               
                </div>

                <div>
                    <div className={general.serviceSlideItem}>
                        <div className={general.serviceBox}>
                            <Image src="/assets/img/aceleramos.png" 
                            alt="Descripción de la imagen" 
                            width={4} 
                            height={3}
                            layout="responsive"
                            className={general.serviceImg}/>

                            <h2 className={general.serviceTitle}>{translations.services.serviceThree.serviceTitle}</h2>

                            <p className={general.serviceDescription}>
                                {translations.services.serviceThree.serviceDescription}
                            </p>
                        </div>     
                    </div>               
                </div>                 
            </Slider>
            
            <div className={general.servicesLinkBtnContainer}>
                <a href="" className={general.servicesLinkBtn}>{translations.services.servicesBtn}</a>
            </div>
        </div>
    );
}