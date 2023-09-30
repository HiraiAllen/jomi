'use client'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import general from '@/app/general.module.css';
import Image from 'next/image';

const settings = {
  // Configura las opciones del slider según tus preferencias
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const HeroSliderResponsive = () => {
  return (
    <div className={general.sliderResponsive}>
      <Slider {...settings}>
        <div>
          <div className={general.slideResponsiveItem}>

            <div className={general.slideResponsiveTextContainer}>
                <h2 className={general.slideItemDescription}>Creamos propuestas de valor que 
                <span style={{color: `#336DAA`}}> revolucionan </span>
                la forma en la que las empresas operan</h2>

                <div className={general.generalBtnContainer}>
                    <a href="" className={general.slideItemBtnBlue}>Conoce más</a>
                </div>
            </div>

            <Image src="/assets/img/background-1-mobile.JPG" 
            alt="Descripción de la imagen" 
            width={4} 
            height={3}
            layout="responsive"
            className={general.slideResponsiveImg}/>
          </div>
        </div>

        <div>
            <div className={general.slideResponsiveItem}>
                <h2 className={general.slideItemDescription}>
                construimos 
                <span style={{color: `#4DA9B5`}}> soluciones a la medida, </span>soluciones a la medida, 
                que se adaptan a tus necesidades
                </h2>

                <div className={general.generalBtnContainer}>
                    <a href="" className={general.slideItemBtnBlueLight}>Conoce más</a>
                </div>

                <Image src="/assets/img/slide_3_responsive.png" 
                alt="Descripción de la imagen" 
                width={4} 
                height={3}
                layout="responsive"
                className={general.slideResponsiveImgSecond}/>
            </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSliderResponsive;