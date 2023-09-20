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
    <div>
      <Slider {...settings}>
        <div>
          <div className={general.slideItem}>
            <h2>Slide 1</h2>
          </div>
        </div>
        <div>
          <div className={general.slideItem}>
            <h2>Slide 2</h2>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;