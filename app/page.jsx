import Image from 'next/image'
import styles from './page.module.css'
//Componentes
import Header from './components/template-parts/Header';
import HeroSlider from './components/template-parts/HeroSlider';
import HeroSliderResponsive from './components/template-parts/HeroSliderResponsive';
import AboutUs from './components/sections/AboutUs';
import Services from './components/sections/Services';
import Offer from './components/sections/Offer';
import Footer from './components/template-parts/Footer';
import Contact from './components/sections/Contact';
import Testimonios from './components/sections/Testimonios';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header>
      <div id="hero">
        <HeroSlider></HeroSlider>
        <HeroSliderResponsive></HeroSliderResponsive>
        <AboutUs></AboutUs>
        <Services></Services>
        <Offer></Offer>
        <Testimonios></Testimonios>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </main>
  )
}
