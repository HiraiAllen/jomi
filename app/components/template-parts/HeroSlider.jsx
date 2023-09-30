//import Image from 'next/image';
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

const HeroSlider = () => {
  return (
    <div className={general.slider}>
      <Slider {...settings}>
        <div>
          <div className={general.slideItem} 
          style={{backgroundImage: `url('/assets/img/scroll_1.png')`}}>
            <h2 className={general.slideItemDescription}>Creamos propuestas de valor que 
            <span style={{color: `#336DAA`}}> revolucionan </span>
            la forma en la que las empresas operan</h2>

            <div className={general.generalBtnContainer}>
              <a href="" className={general.slideItemBtnBlue}>Conoce más</a>
            </div>
            
          </div>
        </div>
        <div>
          <div className={general.slideSecondItem}
          style={{backgroundImage: `url('/assets/img/scroll_3.png')`}}>
            <h2 className={general.slideItemDescription}>
              construimos 
              <span style={{color: `#4DA9B5`}}> soluciones a la medida, </span>soluciones a la medida, 
              que se adaptan a tus necesidades
            </h2>

            <div className={general.generalBtnContainer}>
              <a href="" className={general.slideItemBtnBlueLight}>Conoce más</a>
            </div>

          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;